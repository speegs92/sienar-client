import { Link, StatusPage } from '@sienar/ui';
import { useDocumentTitle } from '@sienar/utils';
import { REGISTER_URL } from '@plugins-identity/urls.ts';

export default function Deleted() {
	useDocumentTitle('Account deleted');

	return (
		<StatusPage title='Account deleted successfully'>
			Your account has been deleted. You can no longer log in or access your account data, but you can <Link to={REGISTER_URL}>register again</Link>.
		</StatusPage>
	);
}