import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { buildProviderTree, createRouter, executePlugins } from '@sienar/core';

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
	return <RouterProvider router={ createRouter() }/>;
}