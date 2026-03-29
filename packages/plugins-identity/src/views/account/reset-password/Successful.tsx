import { Link } from '@sienar/ui';
import { useDocumentTitle } from '@sienar/utils';
import { LOGIN_URL, RESET_PASSWORD_SUCCESSFUL_URL } from '@plugins-identity/urls.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the reset password successful page
 */
export const RESET_PASSWORD_SUCCESSFUL_VIEW = Symbol() as InjectionKey<ReactNode>;

function Successful() {
	useDocumentTitle('Password reset');

	return (
		<>
			<h1>Password reset successfully</h1>
			<p>
				You have reset your password successfully! You can now <Link href={LOGIN_URL}>log in</Link>.
			</p>
		</>
	)
}

const module: ViewModule = {
	path: '/dashboard/account/reset-password/successful',
	pathKey: RESET_PASSWORD_SUCCESSFUL_URL,
	view: <Successful/>,
	viewKey: RESET_PASSWORD_SUCCESSFUL_VIEW
};

export default module;
