import { provide } from '@sienar/utils';
import { MAIN_VIEW } from '@sienar/plugins-core';

import Index from '@plugins-identity/views/Index.tsx';

export function setupViews() {
	provide(MAIN_VIEW, <Index/>, false);
}