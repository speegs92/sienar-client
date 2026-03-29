// import { Form, Textbox } from '@sienar/ui';
// import { AuthorizeRoute, required, useAuthContext, useDocumentTitle, useNavigate } from '@sienar/utils';
// import { DELETE_ACCOUNT_SERVICE } from '@plugins-identity/services.ts';
// import { DELETED_URL } from '@plugins-identity/urls.ts';
import { DELETE_ACCOUNT_URL } from '@plugins-identity/urls.ts';
import { DELETE_ACCOUNT_LAYOUT } from '@plugins-identity/layouts.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the delete account page
 */
export const DELETE_ACCOUNT_VIEW = Symbol() as InjectionKey<ReactNode>;

function Delete() {
	return <></>;
	// useDocumentTitle('Delete account');
	//
	// const authContext = useAuthContext();
	// const navigate = useNavigate();
	//
	// return (
	// 	<AuthorizeRoute>
	// 		<Form
	// 			serviceKey={DELETE_ACCOUNT_SERVICE}
	// 			title='Delete account'
	// 			color='error'
	// 			submitText='Delete account forever!'
	// 			information={(
	// 				<p>
	// 					Are you sure you want to delete your account? This cannot be undone! Enter your password to confirm you wish to proceed.
	// 				</p>
	// 			)}
	// 			onSuccess={successful => {
	// 				if (successful) {
	// 					authContext.logout();
	// 					navigate(DELETED_URL);
	// 				}
	// 			}}
	// 		>
	// 			<Textbox
	// 				name='password'
	// 				displayName='Password'
	// 				type='password'
	// 				validators={[required()]}
	// 				hideNonErrors
	// 			/>
	// 		</Form>
	// 	</AuthorizeRoute>
	// );
}

const module: ViewModule = {
	path: '/dashboard/account/delete',
	pathKey: DELETE_ACCOUNT_URL,
	layout: DELETE_ACCOUNT_LAYOUT,
	view: <Delete/>,
	viewKey: DELETE_ACCOUNT_VIEW
};

export default module;
