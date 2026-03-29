import { provide } from '@sienar/utils';
import * as URLS from '@plugins-identity/urls.ts';

export function setupIdentityUrls() {
	provide(URLS.DOWNLOAD_PERSONAL_DATA_URL, '/api/account/personal-data', false);
}
