import { Link } from '@sienar/ui';
import { useDocumentTitle } from '@sienar/utils';
import { REGISTER_URL } from '@plugins-identity/urls.ts';
import { ACCOUNT_DELETED_URL } from '@plugins-identity/urls.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the account deleted page
 */
export const ACCOUNT_DELETED_VIEW = Symbol() as InjectionKey<ReactNode>;

function Deleted() {
	useDocumentTitle('Account deleted');

	return (
		<>
			<h1>Account deleted successfully</h1>
			<p>
				Your account has been deleted. You can no longer log in or access your account data, but you can <Link href={REGISTER_URL}>register again</Link>.
			</p>
		</>
	);
}

const module: ViewModule = {
	path: '/dashboard/account/deleted',
	pathKey: ACCOUNT_DELETED_URL,
	view: <Deleted/>,
	viewKey: ACCOUNT_DELETED_VIEW
};

export default module;
