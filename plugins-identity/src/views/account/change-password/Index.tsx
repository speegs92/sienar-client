import { Form, Textbox } from '@sienar/ui';
import { AuthorizeRoute, containsLower, containsNumber, containsSpecialCharacter, containsUpper, matches, maxLength, minLength, required, useDocumentTitle } from '@sienar/utils';
import { CHANGE_PASSWORD_SUCCESSFUL_URL } from '@plugins-identity/urls.ts';
import { CHANGE_PASSWORD_SERVICE } from '@plugins-identity/services.ts';

export default function Index() {
	useDocumentTitle('Change password');

	return (
		<AuthorizeRoute>
			<Form
				serviceKey={CHANGE_PASSWORD_SERVICE}
				title='Change password'
				submitText='Change password'
				successRedirectRoute={CHANGE_PASSWORD_SUCCESSFUL_URL}
			>
				<Textbox
					name='newPassword'
					displayName='New password'
					type='password'
					validators={[
						minLength(8),
						maxLength(64),
						containsNumber(),
						containsLower(),
						containsUpper(),
						containsSpecialCharacter()
					]}
				/>
				<Textbox
					name='confirmNewPassword'
					displayName='Confirm new password'
					type='password'
					validators={[matches('newPassword')]}
				/>
				<Textbox
					name='currentPassword'
					displayName='Current password'
					type='password'
					validators={[required()]}
				/>
			</Form>
		</AuthorizeRoute>
	);
}