import { MAIN_LAYOUT, MAIN_URL, MAIN_VIEW } from '@sienar/plugins-core';
import { addLinks, addLinksWithPriority, AUTH_MISSING_ROLES_PARTIAL, AUTH_MUST_BE_LOGGED_IN_PARTIAL, AUTH_MUST_BE_LOGGED_OUT_PARTIAL, DASHBOARD_MENU, DASHBOARD_UTILS_MENU, DASHBOARD_UTILS_SETTINGS_MENU, DRAWER_FOOTER_PARTIAL, inject, provide, registerProvider, registerRoutes } from '@sienar/utils';
import { Dashboard as DashboardLayout, DashboardNarrow as DashboardNarrowLayout, MUI_DATE_LOCALIZATION_PROVIDER } from '@sienar/ui';
import { Dashboard, Info, Home, Settings } from '@mui/icons-material';
import * as KEYS from '@plugins-identity/keys.ts';
import { DASHBOARD_LAYOUT, DASHBOARD_NARROW_LAYOUT } from '@plugins-identity/keys.ts';
import DrawerFooter from '@plugins-identity/partials/DrawerFooter.tsx';
import MissingRoles from '@plugins-identity/partials/MissingRoles.tsx';
import MustBeLoggedIn from '@plugins-identity/partials/MustBeLoggedIn.tsx';
import MustBeLoggedOut from '@plugins-identity/partials/MustBeLoggedOut.tsx';
import DashboardView from '@plugins-identity/views/Dashboard.tsx';
import AboutView from '@plugins-identity/views/About.tsx';
import { identitySetup } from '@plugins-identity/identity/index.ts';
import { roles } from '@plugins-identity/constants.ts';

export function plugin() {
	// Global setup not linked to a specific vertical slice

	// Providers
	registerProvider(inject(MUI_DATE_LOCALIZATION_PROVIDER));

	// Routes
	provide(MAIN_URL, '/', false);
	provide(KEYS.HOME_URL, '/', false);
	provide(KEYS.DASHBOARD_URL, '/dashboard', false);
	provide(KEYS.ABOUT_URL, '/dashboard/about', false);

	// Partials
	provide(DRAWER_FOOTER_PARTIAL, <DrawerFooter/>, false);
	provide(AUTH_MISSING_ROLES_PARTIAL, <MissingRoles/>, false);
	provide(AUTH_MUST_BE_LOGGED_IN_PARTIAL, <MustBeLoggedIn/>, false);
	provide(AUTH_MUST_BE_LOGGED_OUT_PARTIAL, <MustBeLoggedOut/>, false);

	// Menus
	addLinks(
		DASHBOARD_UTILS_MENU,
		{
			text: 'Settings',
			roles: roles.admin,
			icon: <Settings/>,
			childMenu: DASHBOARD_UTILS_SETTINGS_MENU
		}
	);

	addLinksWithPriority(
		DASHBOARD_MENU,
		'highest',
		{
			text: 'Dashboard',
			href: KEYS.DASHBOARD_URL,
			icon: <Dashboard/>,
			requireLoggedIn: false
		}
	);

	addLinksWithPriority(
		DASHBOARD_MENU,
		'lowest',
		{
			text: 'Return home',
			href: KEYS.HOME_URL,
			icon: <Home/>
		}
	);

	addLinksWithPriority(
		DASHBOARD_UTILS_MENU,
		'lowest',
		{
			text: 'About',
			href: KEYS.ABOUT_URL,
			icon: <Info/>
		}
	)

	// Views
	provide(DASHBOARD_LAYOUT, <DashboardLayout/>, false);
	provide(DASHBOARD_NARROW_LAYOUT, <DashboardNarrowLayout/>, false);
	provide(MAIN_LAYOUT, DASHBOARD_LAYOUT, false);

	provide(KEYS.DASHBOARD_VIEW, <DashboardView/>, false);
	provide(KEYS.ABOUT_VIEW, <AboutView/>, false);
	provide(MAIN_VIEW, KEYS.DASHBOARD_VIEW, false);

	registerRoutes(
		DASHBOARD_LAYOUT,
		{
			path: KEYS.DASHBOARD_URL,
			element: KEYS.DASHBOARD_VIEW
		},
		{
			path: KEYS.ABOUT_URL,
			element: KEYS.ABOUT_VIEW
		}
	)

	// Modules
	identitySetup();
}