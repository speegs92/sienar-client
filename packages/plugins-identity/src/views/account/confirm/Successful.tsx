import { useDocumentTitle } from '@sienar/utils';
import { Link } from '@sienar/ui';
import { CONFIRM_SUCCESSFUL_URL, LOGIN_URL } from '@plugins-identity/urls.ts';
import { CONFIRM_SUCCESSFUL_LAYOUT } from '@plugins-identity/layouts.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the confirm account successful page
 */
export const CONFIRM_SUCCESSFUL_VIEW = Symbol() as InjectionKey<ReactNode>;

function Successful() {
	useDocumentTitle('Account confirmed');

	return (
		<>
			<h1>Confirmed successfully</h1>
			<p>
				Your account is now confirmed! You can now <Link href={LOGIN_URL}>log in</Link>.
			</p>
		</>
	);
}

const module: ViewModule = {
	path: '/dashboard/account/confirm/successful',
	pathKey: CONFIRM_SUCCESSFUL_URL,
	layout: CONFIRM_SUCCESSFUL_LAYOUT,
	view: <Successful/>,
	viewKey: CONFIRM_SUCCESSFUL_VIEW
};

export default module;
