import { useParams } from 'react-router-dom';
import { Form, Textbox } from '@sienar/ui';
import { AuthorizeRoute, isEmail, required, useDocumentTitle } from '@sienar/utils';
import { USERS_URL } from '@plugins-identity/urls.ts';
import { USERS_SERVICE } from '@plugins-identity/services.ts';
import { roles } from '@plugins-identity/constants.ts';

export default function Upsert() {
	const params = useParams();
	const id = params['id'];

	useDocumentTitle(id ? 'Update user' : 'Create user');

	return (
		<AuthorizeRoute roles={roles.admin}>
			<Form
				serviceKey={USERS_SERVICE}
				createTitle='Create user'
				createSubmitText='Add user'
				updateTitle='Update user'
				updateSubmitText='Update user'
				upsert
				successRedirectRoute={USERS_URL}
			>
				<Textbox
					name='username'
					displayName='Username'
					validators={[required()]}
				/>
				<Textbox
					name='email'
					displayName='Email'
					type='email'
					validators={[
						required(),
						isEmail()
					]}
				/>
				<Textbox
					name='password'
					displayName='Password'
					type='password'
					validators={[required()]}
				/>
				<Textbox
					name='confirmPassword'
					displayName='Confirm password'
					type='password'
					validators={[required()]}
				/>
			</Form>
		</AuthorizeRoute>
	);
}