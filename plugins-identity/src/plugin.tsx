import { setupUrls } from '@plugins-identity/setup/urls.ts';
import { setupLayouts } from '@plugins-identity/setup/layouts.tsx';
import { setupViews } from '@plugins-identity/setup/views.tsx';

export function plugin() {
	setupUrls();
	setupLayouts();
	setupViews();
}
