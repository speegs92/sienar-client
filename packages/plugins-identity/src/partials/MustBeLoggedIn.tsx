import { Link } from 'react-router-dom';
import { inject } from '@sienar/utils';
import { LOGIN_URL } from '@plugins-identity/urls.ts';

export default function MustBeLoggedIn() {
	return (
		<>
			<h1>You must be logged in</h1>
			<p>
				You must be logged in to view this page. <Link to={`${inject(LOGIN_URL)}?returnUrl=${window.location.pathname}`}>Go to login page</Link>
			</p>
		</>
	);
}
