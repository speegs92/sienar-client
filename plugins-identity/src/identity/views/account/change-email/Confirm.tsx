import { useSearchParams } from 'react-router-dom';
import { Form, HiddenInput } from '@sienar/ui';
import { AuthorizeRoute, useDocumentTitle } from '@sienar/utils';
import { CHANGE_EMAIL_SUCCESSFUL_URL } from '@plugins-identity/identity/urls.ts';
import { CHANGE_EMAIL_CONFIRM_SERVICE } from '@plugins-identity/identity/services.ts';

export default function Index() {
	useDocumentTitle('Confirming email address');

	const [ search ] = useSearchParams();
	const userId = search.get('userId');
	const code = search.get('code');

	return (
		<AuthorizeRoute>
			<Form
				serviceKey={CHANGE_EMAIL_CONFIRM_SERVICE}
				title='Confirming new email'
				successRedirectRoute={CHANGE_EMAIL_SUCCESSFUL_URL}
				hideControls
				immediate
			>
				Please wait while we confirm your new email address...
				<HiddenInput
					value={ userId ?? '' }
					name='userId'
				/>
				<HiddenInput
					value={ code ?? '' }
					name='verificationCode'
				/>
			</Form>
		</AuthorizeRoute>
	);
}