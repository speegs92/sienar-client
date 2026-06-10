import { useSearchParams } from 'react-router-dom';
import { Icon, LinkButton, Form, StandaloneCheckbox, Textbox } from '@sienar/ui';
import { AuthorizeRoute, required, useNavigate, useAuthContext, useDocumentTitle } from '@sienar/utils';
import { MAIN_URL } from '@sienar/plugins-core';
import { ACCOUNT_LOCKED_URL, FORGOT_PASSWORD_URL, LOGIN_URL } from '@plugins-identity/urls.ts';
import { LOGIN_LAYOUT } from '@plugins-identity/layouts.ts';
import { LOGIN_SERVICE } from '@plugins-identity/services.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey, RequestResult } from '@sienar/utils';
import type { LoginResult } from '@plugins-identity/types.ts';

/**
 * The content of the login page
 */
export const LOGIN_VIEW = Symbol() as InjectionKey<ReactNode>;

function Login() {
	useDocumentTitle('Log in');
	const navigate = useNavigate();
	const authContext = useAuthContext();
	const [ params ] = useSearchParams();

	const onLogin = async (result: RequestResult<LoginResult>) => {
		if (result.result) {
			const { userId, verificationCode } = result.result;
			navigate(ACCOUNT_LOCKED_URL, { userId, verificationCode });
		}

		if (!result.wasSuccessful) return;

		await authContext.loadUserData();
		const returnUrl = params.get('returnUrl');

		if (returnUrl) {
			params.delete('returnUrl');
			const queryParams = params.toString();
			navigate(`${returnUrl}?${queryParams}`)
		} else {
			navigate(MAIN_URL);
		}
	}

	return (
		<AuthorizeRoute mustBeLoggedOut>
			<Form
				type='status'
				serviceKey={LOGIN_SERVICE}
				title='Log in'
				submitText='Log in'
				onSuccess={onLogin}
				additionalActions={(
					<LinkButton
						href={FORGOT_PASSWORD_URL}
						color='secondary'
						variant='outlined'
					>
						I forgot my password
					</LinkButton>
				)}
			>
				<Textbox
					name='accountName'
					displayName='Username or email address'
					leftIcon={<Icon icon='account'/>}
					validators={[required()]}
					validationListProps={{
						hideNonErrors: true
					}}
				/>
				<Textbox
					name='password'
					displayName='Password'
					type='password'
					leftIcon={<Icon icon='lock'/>}
					validators={[required()]}
					validationListProps={{
						hideNonErrors: true
					}}
				/>
				<StandaloneCheckbox name='rememberMe' color='secondary'>
					Remember me
				</StandaloneCheckbox>
			</Form>
		</AuthorizeRoute>
	);
}

const module: ViewModule = {
	path: '/dashboard/account/login',
	pathKey: LOGIN_URL,
	layout: LOGIN_LAYOUT,
	view: <Login/>,
	viewKey: LOGIN_VIEW
};

export default module;
