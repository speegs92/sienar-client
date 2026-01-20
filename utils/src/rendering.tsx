import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routing.ts';
import { buildProviderTree } from './providers.tsx';

import type { ReactElement } from 'react';

export function useRerender(): [() => void, boolean] {
	const [trigger, setTrigger] = useState(false);
	return [() => setTrigger(!trigger), trigger];
}

export function createApp(rootId: string = 'root') {
	createRoot(document.getElementById(rootId)!)
		.render(buildProviderTree(createSienarRoot()));
}

function createSienarRoot(): ReactElement {
	return <RouterProvider router={ createRouter() }/>;
}