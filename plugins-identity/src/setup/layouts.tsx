import { provide } from '@sienar/utils';
import { MAIN_LAYOUT } from '@sienar/plugins-core';

import type { ReactNode } from 'react';
import type { InjectionKey } from '@sienar/utils';

import IdentityDashboardLayout from '@plugins-identity/layouts/IdentityDashboardLayout.tsx';

export const DASHBOARD_LAYOUT = Symbol() as InjectionKey<ReactNode|InjectionKey<ReactNode>>;

export function setupLayouts() {
	provide(DASHBOARD_LAYOUT, <IdentityDashboardLayout/>, false);

	provide(MAIN_LAYOUT, DASHBOARD_LAYOUT);
}
