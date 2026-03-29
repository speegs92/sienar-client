// import Typography from '@mui/material/Typography';
// import { Form, Textbox } from '@sienar/ui';
// import { AuthorizeRoute, required, useDocumentTitle } from '@sienar/utils';
// import { FORGOT_PASSWORD_SERVICE } from '@plugins-identity/services.ts';
// import { FORGOT_PASSWORD_SUCCESSFUL_URL } from '@plugins-identity/urls.ts';
import { FORGOT_PASSWORD_URL } from '@plugins-identity/urls.ts';
import { FORGOT_PASSWORD_LAYOUT } from '@plugins-identity/layouts.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the forgot password page
 */
export const FORGOT_PASSWORD_VIEW = Symbol() as InjectionKey<ReactNode>;

function Index() {
	// useDocumentTitle('Password reset');
	//
	// return (
	// 	<AuthorizeRoute mustBeLoggedOut>
	// 		<Form
	// 			serviceKey={FORGOT_PASSWORD_SERVICE}
	// 			title='Forgot password'
	// 			submitText='Request password reset'
	// 			information={(
	// 				<Typography>
	// 					Please enter your username or email address. If your account exists, you should receive an email to reset your password shortly.
	// 				</Typography>
	// 			)}
	// 			successRedirectRoute={FORGOT_PASSWORD_SUCCESSFUL_URL}
	// 		>
	// 			<Textbox
	// 				name='accountName'
	// 				displayName='Username or email address'
	// 				validators={[required()]}
	// 				hideNonErrors
	// 			>
	// 				Username or email address
	// 			</Textbox>
	// 		</Form>
	// 	</AuthorizeRoute>
	// );
	return <></>
}

const module: ViewModule = {
	path: '/dashboard/account/forgot-password',
	pathKey: FORGOT_PASSWORD_URL,
	layout: FORGOT_PASSWORD_LAYOUT,
	view: <Index/>,
	viewKey: FORGOT_PASSWORD_VIEW
};

export default module;
