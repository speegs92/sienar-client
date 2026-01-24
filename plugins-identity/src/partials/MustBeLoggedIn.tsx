import { Link } from 'react-router-dom';
import { StatusPage } from '@sienar/ui';
import { inject } from '@sienar/utils';
import { LOGIN_URL } from '@plugins-identity/identity/urls.ts';

export default function MustBeLoggedIn() {
	return (
		<StatusPage title='You must be logged in'>
			You must be logged in to view this page. <Link to={`${inject(LOGIN_URL)}?returnUrl=${window.location.pathname}`}>Go to login page</Link>
		</StatusPage>
	);
}