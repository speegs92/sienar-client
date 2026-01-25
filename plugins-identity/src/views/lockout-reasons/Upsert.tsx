import { useParams } from 'react-router-dom';
import { Form, Textbox } from '@sienar/ui';
import { AuthorizeRoute, required, useDocumentTitle } from '@sienar/utils';
import { LOCKOUT_REASONS_URL } from '@plugins-identity/urls.ts';
import { LOCKOUT_REASONS_SERVICE } from '@plugins-identity/services.ts';
import { roles } from '@plugins-identity/constants.ts';

export default function Upsert() {
	const params = useParams();
	const id = params['id'];

	useDocumentTitle(id ? 'Update lockout reason' : 'Create lockout reason');

	return (
		<AuthorizeRoute roles={roles.admin}>
			<Form
				serviceKey={LOCKOUT_REASONS_SERVICE}
				successRedirectRoute={LOCKOUT_REASONS_URL}
				createTitle='Create lockout reason'
				createSubmitText='Add reason'
				updateTitle='Update lockout reason'
				updateSubmitText='Update reason'
				upsert
			>
				<Textbox
					name='reason'
					displayName='Reason'
					validators={[required()]}
				/>
			</Form>
		</AuthorizeRoute>
	);
}