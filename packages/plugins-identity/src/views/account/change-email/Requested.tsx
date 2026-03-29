import { AuthorizeRoute, useDocumentTitle } from '@sienar/utils';
import { CHANGE_EMAIL_REQUESTED_URL } from '@plugins-identity/urls.ts';
import { CHANGE_EMAIL_REQUESTED_LAYOUT } from '@plugins-identity/layouts.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the change email requested page
 */
export const CHANGE_EMAIL_REQUESTED_VIEW = Symbol() as InjectionKey<ReactNode>;

function Requested() {
	useDocumentTitle('Email change requested');

	return (
		<AuthorizeRoute>
			<h1>Email change requested successfully</h1>
			<p>
				You have successfully requested to update your email. Check your email for a confirmation link. When you receive it, click the link to confirm your new email address.
			</p>
		</AuthorizeRoute>
	);
}

const module: ViewModule = {
	path: '/dashboard/account/change-email/requested',
	pathKey: CHANGE_EMAIL_REQUESTED_URL,
	layout: CHANGE_EMAIL_REQUESTED_LAYOUT,
	view: <Requested/>,
	viewKey: CHANGE_EMAIL_REQUESTED_VIEW
};

export default module;
