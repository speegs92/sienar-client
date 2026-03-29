// import { Form, Textbox } from '@sienar/ui';
// import { AuthorizeRoute, isEmail, matches, required, useDocumentTitle } from '@sienar/utils';
// import { CHANGE_EMAIL_REQUESTED_URL } from '@plugins-identity/urls.ts';
// import { CHANGE_EMAIL_SERVICE } from '@plugins-identity/services.ts';
import { CHANGE_EMAIL_URL } from '@plugins-identity/urls.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the change email page
 */
export const CHANGE_EMAIL_VIEW = Symbol() as InjectionKey<ReactNode>;

function Index() {
	// useDocumentTitle('Change email address');
	//
	// return (
	// 	<AuthorizeRoute>
	// 		<Form
	// 			serviceKey={CHANGE_EMAIL_SERVICE}
	// 			title='Change email'
	// 			submitText='Change email'
	// 			successRedirectRoute={CHANGE_EMAIL_REQUESTED_URL}
	// 		>
	// 			<Textbox
	// 				name='email'
	// 				displayName='New email address'
	// 				validators={[
	// 					required(),
	// 					isEmail()
	// 				]}
	// 			/>
	// 			<Textbox
	// 				name='confirmEmail'
	// 				displayName='Confirm new email address'
	// 				validators={[
	// 					matches('email')
	// 				]}
	// 			/>
	// 			<Textbox
	// 				name='confirmPassword'
	// 				displayName='Confirm your password'
	// 				type='password'
	// 				validators={[required()]}
	// 			/>
	// 		</Form>
	// 	</AuthorizeRoute>
	// );
	return <></>
}

const module: ViewModule = {
	path: '/dashboard/account/change-email',
	pathKey: CHANGE_EMAIL_URL,
	view: <Index/>,
	viewKey: CHANGE_EMAIL_VIEW
};

export default module;
