import { LinkButton, Card, CardActions, CardContent, CardHeader } from '@sienar/ui';
import { AuthorizeRoute, useDocumentTitle } from '@sienar/utils';
import { DOWNLOAD_PERSONAL_DATA_URL, PERSONAL_DATA_URL } from '@plugins-identity/urls.ts';
import { PERSONAL_DATA_LAYOUT } from '@plugins-identity/layouts.ts';

import type { ReactNode } from 'react';
import type { ViewModule } from '@sienar/plugins-core';
import type { InjectionKey } from '@sienar/utils';

/**
 * The content of the personal data page
 */
export const PERSONAL_DATA_VIEW = Symbol() as InjectionKey<ReactNode>;

function PersonalData() {
	useDocumentTitle('Personal data');

	return (
		<AuthorizeRoute>
			<Card>
				<CardHeader>Personal data</CardHeader>

				<CardContent>
					<p>
						By creating an account, you give us personal data that we store. You have the right to know what data we have. You also have the right to request that we delete your personal data.
					</p>
				</CardContent>

				<CardActions>
					<LinkButton
						href={DOWNLOAD_PERSONAL_DATA_URL}
						target='_blank'
					>
						Download personal data
					</LinkButton>
				</CardActions>
			</Card>
		</AuthorizeRoute>
	);
}

const module: ViewModule = {
	path: '/dashboard/account/personal-data',
	pathKey: PERSONAL_DATA_URL,
	layout: PERSONAL_DATA_LAYOUT,
	view: <PersonalData/>,
	viewKey: PERSONAL_DATA_VIEW
};

export default module;
