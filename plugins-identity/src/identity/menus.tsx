import { addLinks, DASHBOARD_UTILS_SETTINGS_MENU } from '@sienar/utils';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Email from '@mui/icons-material/Email';
import Group from '@mui/icons-material/Group';
import Key from '@mui/icons-material/Key';
import Lock from '@mui/icons-material/Lock';
import * as URLS from '@plugins-identity/identity/urls.ts';

import type { InjectionKey, LinkDictionary } from '@sienar/utils';

export const USER_SETTINGS_MENU = Symbol() as InjectionKey<LinkDictionary>;

export function setupIdentityMenus() {
	addLinks(
		DASHBOARD_UTILS_SETTINGS_MENU,
		{
			text: 'Users',
			href: URLS.USERS_URL,
			icon: <Group/>
		},
		{
			text: 'Lockout reasons',
			href: URLS.LOCKOUT_REASONS_URL,
			icon: <Lock/>
		}
	);

	addLinks(
		USER_SETTINGS_MENU,
		{
			text: 'Change email address',
			href: URLS.CHANGE_EMAIL_URL,
			icon: <Email/>,
			requireLoggedIn: true
		},
		{
			text: 'Change password',
			href: URLS.CHANGE_PASSWORD_URL,
			icon: <Lock/>,
			requireLoggedIn: true
		},
		{
			text: 'Personal data',
			href: URLS.PERSONAL_DATA_URL,
			icon: <Key/>,
			requireLoggedIn: true
		},
		{
			text: 'Delete account',
			href: URLS.DELETE_ACCOUNT_URL,
			icon: <DeleteForever/>,
			requireLoggedIn: true
		}
	);
}