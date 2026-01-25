import { Link, StatusPage } from '@sienar/ui';
import { useDocumentTitle } from '@sienar/utils';
import { LOGIN_URL } from '@plugins-identity/urls.ts';

export default function Successful() {
	useDocumentTitle('Account confirmed');

	return (
		<StatusPage title='Confirmed successfully'>
			Your account is now confirmed! You can now <Link to={LOGIN_URL}>log in</Link>.
		</StatusPage>
	);
}