import '@mdi/font/fonts/materialdesignicons-webfont.eot';
import '@mdi/font/fonts/materialdesignicons-webfont.ttf';
import '@mdi/font/fonts/materialdesignicons-webfont.woff';
import '@mdi/font/fonts/materialdesignicons-webfont.woff2';
import '@mdi/font/css/materialdesignicons.min.css';
import '../../packages/ui/styles/sienar/index.scss';
import '../../packages/ui/styles/utilities/index.scss';

import { provide } from '@sienar/utils';
import { MAIN_LAYOUT, MAIN_VIEW, MAIN_URL } from '@sienar/plugins-core';
import MainLayout from './MainLayout.tsx';
import MainView from './MainView.tsx';

export default function plugin() {
	provide(MAIN_LAYOUT, <MainLayout/>);
	provide(MAIN_VIEW, <MainView/>);
	provide(MAIN_URL, '/');
}
