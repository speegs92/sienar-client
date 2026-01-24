import Typography from '@mui/material/Typography';
import { Form, Textbox } from '@sienar/ui';
import { AuthorizeRoute, required, useAuthContext, useDocumentTitle, useNavigate } from '@sienar/utils';
import { DELETE_ACCOUNT_SERVICE } from '@plugins-identity/identity/services.ts';
import { DELETED_URL } from '@plugins-identity/identity/urls.ts';

export default function Delete() {
	useDocumentTitle('Delete account');

	const authContext = useAuthContext();
	const navigate = useNavigate();

	return (
		<AuthorizeRoute>
			<Form
				serviceKey={DELETE_ACCOUNT_SERVICE}
				title='Delete account'
				color='error'
				submitText='Delete account forever!'
				elevation={1}
				information={(
					<Typography>
						Are you sure you want to delete your account? This cannot be undone! Enter your password to confirm you wish to proceed.
					</Typography>
				)}
				onSuccess={successful => {
					if (successful) {
						authContext.logout();
						navigate(DELETED_URL);
					}
				}}
			>
				<Textbox
					name='password'
					displayName='Password'
					type='password'
					validators={[required()]}
					hideNonErrors
				/>
			</Form>
		</AuthorizeRoute>
	);
}