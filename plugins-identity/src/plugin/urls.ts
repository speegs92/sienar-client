import { provide } from '@sienar/utils';
import { MAIN_URL } from '@sienar/plugins-core';
import * as URLS from '@plugins-identity/urls.ts';

export function setupIdentityUrls() {
	// Global
	provide(MAIN_URL, '/dashboard', false);
	provide(URLS.ABOUT_URL, '/dashboard/about', false);

	provide(URLS.REGISTER_URL, '/dashboard/account/register', false);
	provide(URLS.REGISTER_SUCCESSFUL_URL, '/dashboard/account/register/successful', false);
	provide(URLS.CONFIRM_URL, '/dashboard/account/confirm', false);
	provide(URLS.CONFIRM_SUCCESSFUL_URL, '/dashboard/account/confirm/successful', false);
	provide(URLS.LOGIN_URL, '/dashboard/account/login', false);
	provide(URLS.FORGOT_PASSWORD_URL, '/dashboard/account/forgot-password', false);
	provide(URLS.FORGOT_PASSWORD_SUCCESSFUL_URL, '/dashboard/account/forgot-password/successful', false);
	provide(URLS.RESET_PASSWORD_URL, '/dashboard/account/reset-password', false);
	provide(URLS.RESET_PASSWORD_SUCCESSFUL_URL, '/dashboard/account/reset-password/successful', false);
	provide(URLS.CHANGE_EMAIL_URL, '/dashboard/account/change-email', false);
	provide(URLS.CHANGE_EMAIL_REQUESTED_URL, '/dashboard/account/change-email/requested', false);
	provide(URLS.CHANGE_EMAIL_CONFIRM_URL, '/dashboard/account/change-email/confirm', false);
	provide(URLS.CHANGE_EMAIL_SUCCESSFUL_URL, '/dashboard/account/change-email/successful', false);
	provide(URLS.CHANGE_PASSWORD_URL, '/dashboard/account/change-password', false);
	provide(URLS.CHANGE_PASSWORD_SUCCESSFUL_URL, '/dashboard/account/change-password/successful', false);
	provide(URLS.PERSONAL_DATA_URL, '/dashboard/account/personal-data', false);
	provide(URLS.DOWNLOAD_PERSONAL_DATA_URL, '/api/account/personal-data', false);
	provide(URLS.DELETE_ACCOUNT_URL, '/dashboard/account/delete', false);
	provide(URLS.DELETED_URL, '/dashboard/account/deleted', false);
	provide(URLS.ACCOUNT_LOCKED_URL, '/dashboard/account/locked', false);

	provide(URLS.USERS_URL, '/dashboard/users', false);
	provide(URLS.USERS_ADD_URL, '/dashboard/users/add', false);
	provide(URLS.USERS_EDIT_URL, '/dashboard/users/:id', false);
	provide(URLS.USERS_ROLES_URL, '/dashboard/users/:id/roles', false);
	provide(URLS.USERS_LOCK_URL, '/dashboard/users/:id/lock', false);

	provide(URLS.LOCKOUT_REASONS_URL, '/dashboard/lockout-reasons', false);
	provide(URLS.LOCKOUT_REASONS_ADD_URL, '/dashboard/lockout-reasons/add', false);
	provide(URLS.LOCKOUT_REASONS_EDIT_URL, '/dashboard/lockout-reasons/:id', false);
}
