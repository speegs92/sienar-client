import { setupIdentityUrls } from '@plugins-identity/identity/urls.ts';
import { setupIdentityLayouts } from '@plugins-identity/identity/layouts.ts';
import { setupIdentityMenus } from '@plugins-identity/identity/menus.tsx';
import { setupIdentityRoutes } from '@plugins-identity/identity/routes.ts';
import { setupIdentityServices } from '@plugins-identity/identity/services.ts';
import { setupIdentityViews } from '@plugins-identity/identity/views.tsx';

export default function identitySetup() {
	setupIdentityUrls();
	setupIdentityLayouts();
	setupIdentityMenus();
	setupIdentityRoutes();
	setupIdentityServices();
	setupIdentityViews();
}