import { provide } from '@sienar/utils';
import { MAIN_URL } from '@sienar/plugins-core';

export function setupUrls() {
	provide(MAIN_URL, '/', false);
}