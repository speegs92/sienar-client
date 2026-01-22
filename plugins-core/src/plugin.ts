import { registerRoutes } from '@sienar/utils';

import type { InjectionKey, LinkDictionary } from '@sienar/utils';
import type { ReactNode } from 'react';

/**
 * The main layout DI key
 */
export const MAIN_LAYOUT = Symbol() as InjectionKey<ReactNode|InjectionKey<ReactNode>>;

/**
 * The main menu DI key
 */
export const MAIN_MENU = Symbol() as InjectionKey<LinkDictionary>;

/**
 * The main view DI key
 */
export const MAIN_VIEW = Symbol() as InjectionKey<ReactNode|InjectionKey<ReactNode>>;

/**
 * The main URL DI key
 */
export const MAIN_URL = Symbol() as InjectionKey<string>;

export function plugin() {
	registerRoutes(
		MAIN_LAYOUT,
		{
			path: MAIN_URL,
			element: MAIN_VIEW
		}
	);
}