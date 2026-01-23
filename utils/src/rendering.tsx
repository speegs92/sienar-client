import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { inject } from '@utils/di.ts';
import { NOTIFICATION_PROVIDER_COMPONENT } from '@utils/notifications.ts';
import { buildProviderTree, registerProvider } from '@utils/providers.tsx';
import { executePlugins } from '@utils/plugins.ts';
import { createRouter } from '@utils/routing.ts';

import type { ReactElement } from 'react';

export function useRerender(): [() => void, boolean] {
	const [trigger, setTrigger] = useState(false);
	return [() => setTrigger(!trigger), trigger];
}

export function createApp(rootId: string = 'root') {
	executePlugins();

	createRoot(document.getElementById(rootId)!)
		.render(buildProviderTree(createSienarRoot()));
}

function createSienarRoot(): ReactElement {
	const notificationProvider = inject(NOTIFICATION_PROVIDER_COMPONENT, true);

	if (notificationProvider) {
		registerProvider(notificationProvider);
	}

	return <RouterProvider router={ createRouter() }/>;
}