// import { Form, Textbox } from '@sienar/ui';
// import { AuthorizeRoute, containsLower, containsNumber, containsSpecialCharacter, containsUpper, matches, maxLength, minLength, required, useDocumentTitle } from '@sienar/utils';
// import { CHANGE_PASSWORD_SUCCESSFUL_URL } from '@plugins-identity/urls.ts';
// import { CHANGE_PASSWORD_SERVICE } from '@plugins-identity/services.ts';
import { CHANGE_PASSWORD_URL } from '@plugins-identity/urls.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the change password page
 */
export const CHANGE_PASSWORD_VIEW = Symbol() as InjectionKey<ReactNode>;

function Index() {
	// useDocumentTitle('Change password');
	//
	// return (
	// 	<AuthorizeRoute>
	// 		<Form
	// 			serviceKey={CHANGE_PASSWORD_SERVICE}
	// 			title='Change password'
	// 			submitText='Change password'
	// 			successRedirectRoute={CHANGE_PASSWORD_SUCCESSFUL_URL}
	// 		>
	// 			<Textbox
	// 				name='newPassword'
	// 				displayName='New password'
	// 				type='password'
	// 				validators={[
	// 					minLength(8),
	// 					maxLength(64),
	// 					containsNumber(),
	// 					containsLower(),
	// 					containsUpper(),
	// 					containsSpecialCharacter()
	// 				]}
	// 			/>
	// 			<Textbox
	// 				name='confirmNewPassword'
	// 				displayName='Confirm new password'
	// 				type='password'
	// 				validators={[matches('newPassword')]}
	// 			/>
	// 			<Textbox
	// 				name='currentPassword'
	// 				displayName='Current password'
	// 				type='password'
	// 				validators={[required()]}
	// 			/>
	// 		</Form>
	// 	</AuthorizeRoute>
	// );
	return <></>
}

const module: ViewModule = {
	path: '/dashboard/account/change-password',
	pathKey: CHANGE_PASSWORD_URL,
	view: <Index/>,
	viewKey: CHANGE_PASSWORD_VIEW
};

export default module;
