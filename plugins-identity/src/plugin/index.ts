import { setupIdentityUrls } from './urls.ts';
import { setupIdentityLayouts } from './layouts.tsx';
import { setupIdentityMenus } from './menus.tsx';
import { setupIdentityRoutes } from './routes.ts';
import { setupIdentityServices } from './services.ts';
import { setupIdentityViews } from './views.tsx';
import { setupIdentityPartials } from './partials.tsx';
import { setupIdentityProviders } from './providers.ts';

export * from './layouts.tsx';
export * from './menus.tsx';
export * from './partials.tsx';
export * from './providers.ts';
export * from './routes.ts';
export * from './services.ts';
export * from './urls.ts';
export * from './views.tsx';

export function plugin() {
	setupIdentityUrls();
	setupIdentityLayouts();
	setupIdentityMenus();
	setupIdentityRoutes();
	setupIdentityServices();
	setupIdentityViews();
	setupIdentityPartials();
	setupIdentityProviders();
}
