// import { useSearchParams } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
// import { Form, HiddenInput, Textbox } from '@sienar/ui';
// import { AuthorizeRoute, containsLower, containsNumber, containsSpecialCharacter, containsUpper, matches, maxLength, minLength, useDocumentTitle } from '@sienar/utils';
// import { RESET_PASSWORD_SERVICE } from '@plugins-identity/services.ts';
// import { RESET_PASSWORD_SUCCESSFUL_URL } from '@plugins-identity/urls.ts';
import { RESET_PASSWORD_URL } from '@plugins-identity/urls.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the reset password page
 */
export const RESET_PASSWORD_VIEW = Symbol() as InjectionKey<ReactNode>;

function Index() {
	return <></>;
	// useDocumentTitle('Reset password');
	//
	// const [ query ] = useSearchParams();
	// const userId = query.get('userId');
	// const code = query.get('code');
	//
	// return (
	// 	<AuthorizeRoute mustBeLoggedOut>
	// 		<Form
	// 			title='Reset password'
	// 			serviceKey={RESET_PASSWORD_SERVICE}
	// 			submitText='Reset password'
	// 			information={(
	// 				<Typography>
	// 					Please enter your new password. Your password should be at least 8 characters long and have at least one lowercase letter, one uppercase letter, one number, and one special character.
	// 				</Typography>
	// 			)}
	// 			successRedirectRoute={RESET_PASSWORD_SUCCESSFUL_URL}
	// 		>
	// 			<HiddenInput
	// 				value={ userId ?? '' }
	// 				name='userId'
	// 			/>
	// 			<HiddenInput
	// 				value={ code ?? '' }
	// 				name='verificationCode'
	// 			/>
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
	// 				validators={[
	// 					matches('newPassword')
	// 				]}
	// 			/>
	// 		</Form>
	// 	</AuthorizeRoute>
	// );
}

const module: ViewModule = {
	path: '/dashboard/account/reset-password',
	pathKey: RESET_PASSWORD_URL,
	view: <Index/>,
	viewKey: RESET_PASSWORD_VIEW
};

export default module;
