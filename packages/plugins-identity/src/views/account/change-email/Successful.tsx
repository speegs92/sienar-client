import { AuthorizeRoute, useDocumentTitle } from '@sienar/utils';
import { CHANGE_EMAIL_SUCCESSFUL_URL } from '@plugins-identity/urls.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the change email successful page
 */
export const CHANGE_EMAIL_SUCCESSFUL_VIEW = Symbol() as InjectionKey<ReactNode>;

function Successful() {
	useDocumentTitle('Email confirmed');

	return (
		<AuthorizeRoute>
			<h1>Confirmed successfully</h1>
			<p>
				Your new email address is now confirmed!
			</p>
		</AuthorizeRoute>
	);
}

const module: ViewModule = {
	path: '/dashboard/account/change-email/successful',
	pathKey: CHANGE_EMAIL_SUCCESSFUL_URL,
	view: <Successful/>,
	viewKey: CHANGE_EMAIL_SUCCESSFUL_VIEW
};

export default module;
