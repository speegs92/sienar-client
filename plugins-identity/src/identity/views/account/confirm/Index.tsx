import { useSearchParams } from 'react-router-dom';
import { Form, HiddenInput } from '@sienar/ui';
import { CONFIRM_SUCCESSFUL_URL } from '@plugins-identity/identity/urls.ts';
import { CONFIRM_SERVICE } from '@plugins-identity/identity/services.ts';
import { AuthorizeRoute, useDocumentTitle } from '@sienar/utils';

export default function Index() {
	useDocumentTitle('Confirming account');

	const [ search ] = useSearchParams();
	const userId = search.get('userId');
	const code = search.get('code');

	return (
		<AuthorizeRoute mustBeLoggedOut>
			<Form
				serviceKey={CONFIRM_SERVICE}
				title='Confirming account'
				successRedirectRoute={CONFIRM_SUCCESSFUL_URL}
				hideControls
				immediate
			>
				Please wait while we confirm your account...
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