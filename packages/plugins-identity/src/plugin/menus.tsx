import { addLinks, addLinksWithPriority, DASHBOARD_MENU, DASHBOARD_UTILS_MENU, DASHBOARD_UTILS_SETTINGS_MENU } from '@sienar/utils';
import { MAIN_URL } from '@sienar/plugins-core';
import Dashboard from '@mui/icons-material/Dashboard';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Email from '@mui/icons-material/Email';
import Group from '@mui/icons-material/Group';
import Info from '@mui/icons-material/Info';
import Key from '@mui/icons-material/Key';
import Lock from '@mui/icons-material/Lock';
import Settings from '@mui/icons-material/Settings';
import { USER_SETTINGS_MENU } from '@plugins-identity/menus.ts';
import * as URLS from '@plugins-identity/urls.ts';
import { roles, urls } from '@plugins-identity/constants.ts';

export function setupIdentityMenus() {
	addLinksWithPriority(
		DASHBOARD_MENU,
		'highest',
		{
			text: 'Dashboard',
			href: MAIN_URL,
			icon: <Dashboard/>,
			requireLoggedIn: false
		}
	);

	addLinksWithPriority(
		DASHBOARD_UTILS_MENU,
		'lowest',
		{
			text: 'About',
			href: URLS.ABOUT_URL,
			icon: <Info/>
		}
	);

	addLinks(
		DASHBOARD_UTILS_MENU,
		{
			text: 'Settings',
			roles: roles.admin,
			icon: <Settings/>,
			childMenu: DASHBOARD_UTILS_SETTINGS_MENU
		}
	);

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
			href: urls.account.changeEmail.index,
			icon: <Email/>,
			requireLoggedIn: true
		},
		{
			text: 'Change password',
			href: urls.account.changePassword.index,
			icon: <Lock/>,
			requireLoggedIn: true
		},
		{
			text: 'Personal data',
			href: urls.account.personalData,
			icon: <Key/>,
			requireLoggedIn: true
		},
		{
			text: 'Delete account',
			href: urls.account.delete,
			icon: <DeleteForever/>,
			requireLoggedIn: true
		}
	);
}
