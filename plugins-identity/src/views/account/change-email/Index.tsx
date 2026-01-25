import { Form, Textbox } from '@sienar/ui';
import { AuthorizeRoute, isEmail, matches, required, useDocumentTitle } from '@sienar/utils';
import { CHANGE_EMAIL_REQUESTED_URL } from '@plugins-identity/urls.ts';
import { CHANGE_EMAIL_SERVICE } from '@plugins-identity/services.ts';

export default function Index() {
	useDocumentTitle('Change email address');

	return (
		<AuthorizeRoute>
			<Form
				serviceKey={CHANGE_EMAIL_SERVICE}
				title='Change email'
				submitText='Change email'
				successRedirectRoute={CHANGE_EMAIL_REQUESTED_URL}
			>
				<Textbox
					name='email'
					displayName='New email address'
					validators={[
						required(),
						isEmail()
					]}
				/>
				<Textbox
					name='confirmEmail'
					displayName='Confirm new email address'
					validators={[
						matches('email')
					]}
				/>
				<Textbox
					name='confirmPassword'
					displayName='Confirm your password'
					type='password'
					validators={[required()]}
				/>
			</Form>
		</AuthorizeRoute>
	);
}