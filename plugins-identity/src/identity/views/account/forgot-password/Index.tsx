import Typography from '@mui/material/Typography';
import { Form, Textbox } from '@sienar/ui';
import { AuthorizeRoute, required, useDocumentTitle } from '@sienar/utils';
import { FORGOT_PASSWORD_SERVICE } from '@plugins-identity/identity/services.ts';
import { FORGOT_PASSWORD_SUCCESSFUL_URL } from '@plugins-identity/identity/urls.ts';

export default function Index() {
	useDocumentTitle('Password reset');

	return (
		<AuthorizeRoute mustBeLoggedOut>
			<Form
				serviceKey={FORGOT_PASSWORD_SERVICE}
				title='Forgot password'
				submitText='Request password reset'
				information={(
					<Typography>
						Please enter your username or email address. If your account exists, you should receive an email to reset your password shortly.
					</Typography>
				)}
				successRedirectRoute={FORGOT_PASSWORD_SUCCESSFUL_URL}
			>
				<Textbox
					name='accountName'
					displayName='Username or email address'
					validators={[required()]}
					hideNonErrors
				>
					Username or email address
				</Textbox>
			</Form>
		</AuthorizeRoute>
	);
}