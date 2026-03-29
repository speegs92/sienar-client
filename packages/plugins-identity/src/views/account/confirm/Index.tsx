// import { useSearchParams } from 'react-router-dom';
// import { Form, HiddenInput } from '@sienar/ui';
// import { CONFIRM_SUCCESSFUL_URL } from '@plugins-identity/urls.ts';
// import { CONFIRM_SERVICE } from '@plugins-identity/services.ts';
// import { AuthorizeRoute, useDocumentTitle } from '@sienar/utils';
import { CONFIRM_URL } from '@plugins-identity/urls.ts';
import { CONFIRM_LAYOUT } from '@plugins-identity/layouts.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the confirm account page
 */
export const CONFIRM_VIEW = Symbol() as InjectionKey<ReactNode>;

function Index() {
	// useDocumentTitle('Confirming account');
	//
	// const [ search ] = useSearchParams();
	// const userId = search.get('userId');
	// const code = search.get('code');
	//
	// return (
	// 	<AuthorizeRoute mustBeLoggedOut>
	// 		<Form
	// 			serviceKey={CONFIRM_SERVICE}
	// 			title='Confirming account'
	// 			successRedirectRoute={CONFIRM_SUCCESSFUL_URL}
	// 			hideControls
	// 			immediate
	// 		>
	// 			Please wait while we confirm your account...
	// 			<HiddenInput
	// 				value={ userId ?? '' }
	// 				name='userId'
	// 			/>
	// 			<HiddenInput
	// 				value={ code ?? '' }
	// 				name='verificationCode'
	// 			/>
	// 		</Form>
	// 	</AuthorizeRoute>
	// );
	return <></>
}

const module: ViewModule = {
	path: '/dashboard/account/confirm',
	pathKey: CONFIRM_URL,
	layout: CONFIRM_LAYOUT,
	view: <Index/>,
	viewKey: CONFIRM_VIEW
};

export default module;
