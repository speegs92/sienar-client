import { Link, StatusPage } from '@sienar/ui';
import { useDocumentTitle } from '@sienar/utils';
import { LOGIN_URL } from '@plugins-identity/identity/urls.ts';

export default function Successful() {
	useDocumentTitle('Password reset');

	return (
		<StatusPage title='Password reset successfully'>
			You have reset your password successfully! You can now <Link to={LOGIN_URL}>log in</Link>.
		</StatusPage>
	)
}