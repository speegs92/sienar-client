import { useSearchParams } from 'react-router-dom';
import { ButtonLink, StandaloneCheckbox, Form, Textbox } from '@sienar/ui';
import { AuthorizeRoute, required, useNavigate, useAuthContext, useDocumentTitle } from '@sienar/utils';
import { DASHBOARD_URL } from '@plugins-identity/keys';
import { ACCOUNT_LOCKED_URL, FORGOT_PASSWORD_URL } from '@plugins-identity/identity/urls.ts';
import { LOGIN_SERVICE } from '@plugins-identity/identity/services.ts';
import type { RequestResult } from '@sienar/utils';
import type { LoginResult } from '@plugins-identity/identity/types.ts';

export default function Login() {
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
			navigate(DASHBOARD_URL);
		}
	}

	return (
		<AuthorizeRoute mustBeLoggedOut>
			<Form
				serviceKey={LOGIN_SERVICE}
				title='Log in'
				submitText='Log in'
				onSuccess={onLogin}
				additionalActions={(
					<ButtonLink
						to={FORGOT_PASSWORD_URL}
						color='secondary'
						variant='outlined'
					>
						I forgot my password
					</ButtonLink>
				)}
			>
				<Textbox
					name='accountName'
					displayName='Username or email address'
					validators={[required()]}
					hideNonErrors
				/>
				<Textbox
					name='password'
					displayName='Password'
					type='password'
					validators={[required()]}
					hideNonErrors
				/>
				<StandaloneCheckbox name='rememberMe'>
					Remember me
				</StandaloneCheckbox>
			</Form>
		</AuthorizeRoute>
	)
}