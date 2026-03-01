import { provide } from '@sienar/utils';
import { MAIN_VIEW } from '@sienar/plugins-core';
import * as VIEWS from '@plugins-identity/views.ts';

import Dashboard from '@plugins-identity/views/Dashboard.tsx';
import About from '@plugins-identity/views/About.tsx';

import Register from '@plugins-identity/views/account/register/Index.tsx';
import RegisterSuccessful from '@plugins-identity/views/account/register/Successful.tsx';
import Confirm from '@plugins-identity/views/account/confirm/Index.tsx';
import ConfirmSuccessful from '@plugins-identity/views/account/confirm/Successful.tsx';
import Login from '@plugins-identity/views/account/Login.tsx';
import ForgotPassword from '@plugins-identity/views/account/forgot-password/Index';
import ForgotPasswordSuccessful from '@plugins-identity/views/account/forgot-password/Successful';
import ResetPassword from '@plugins-identity/views/account/reset-password/Index';
import ResetPasswordSuccessful from '@plugins-identity/views/account/reset-password/Successful';
import ChangeEmail from '@plugins-identity/views/account/change-email/Index';
import ChangeEmailRequested from '@plugins-identity/views/account/change-email/Requested';
import ChangeEmailConfirm from '@plugins-identity/views/account/change-email/Confirm';
import ChangeEmailSuccessful from '@plugins-identity/views/account/change-email/Successful';
import ChangePassword from '@plugins-identity/views/account/change-password/Index';
import ChangePasswordSuccessful from '@plugins-identity/views/account/change-password/Successful';
import PersonalData from '@plugins-identity/views/account/PersonalData';
import DeleteAccount from '@plugins-identity/views/account/Delete';
import Deleted from '@plugins-identity/views/account/Deleted';
import AccountLocked from '@plugins-identity/views/account/AccountLocked.tsx';
import UserIndex from '@plugins-identity/views/users/Index.tsx';
import LockoutReasonIndex from '@plugins-identity/views/lockout-reasons/Index.tsx';
import UserUpsert from '@plugins-identity/views/users/Upsert.tsx';
import UserRoles from '@plugins-identity/views/users/Roles.tsx';
import UserLock from '@plugins-identity/views/users/Lock.tsx';
import LockoutReasonUpsert from '@plugins-identity/views/lockout-reasons/Upsert.tsx';

export function setupIdentityViews() {
	provide(MAIN_VIEW, <Dashboard/>, false);
	provide(VIEWS.ABOUT_VIEW, <About/>, false);

	provide(VIEWS.REGISTER_VIEW, <Register/>, false)
	provide(VIEWS.REGISTER_SUCCESSFUL_VIEW, <RegisterSuccessful/>, false);
	provide(VIEWS.CONFIRM_VIEW, <Confirm/>, false);
	provide(VIEWS.CONFIRM_SUCCESSFUL_VIEW, <ConfirmSuccessful/>, false);
	provide(VIEWS.LOGIN_VIEW, <Login/>, false);
	provide(VIEWS.FORGOT_PASSWORD_VIEW, <ForgotPassword/>, false);
	provide(VIEWS.FORGOT_PASSWORD_SUCCESSFUL_VIEW, <ForgotPasswordSuccessful/>, false);
	provide(VIEWS.RESET_PASSWORD_VIEW, <ResetPassword/>, false);
	provide(VIEWS.RESET_PASSWORD_SUCCESSFUL_VIEW, <ResetPasswordSuccessful/>, false);
	provide(VIEWS.ACCOUNT_LOCKOUT_VIEW, <AccountLocked/>, false);
	provide(VIEWS.CHANGE_EMAIL_VIEW, <ChangeEmail/>, false);
	provide(VIEWS.CHANGE_EMAIL_REQUESTED_VIEW, <ChangeEmailRequested/>, false);
	provide(VIEWS.CHANGE_EMAIL_CONFIRM_VIEW, <ChangeEmailConfirm/>, false);
	provide(VIEWS.CHANGE_EMAIL_SUCCESSFUL_VIEW, <ChangeEmailSuccessful/>, false);
	provide(VIEWS.CHANGE_PASSWORD_VIEW, <ChangePassword/>, false);
	provide(VIEWS.CHANGE_PASSWORD_SUCCESSFUL_VIEW, <ChangePasswordSuccessful/>, false);
	provide(VIEWS.PERSONAL_DATA_VIEW, <PersonalData/>, false);
	provide(VIEWS.DELETE_ACCOUNT_VIEW, <DeleteAccount/>, false);
	provide(VIEWS.DELETED_VIEW, <Deleted/>, false);

	provide(VIEWS.USERS_VIEW, <UserIndex/>, false);
	provide(VIEWS.USERS_ADD_VIEW, <UserUpsert/>, false);
	provide(VIEWS.USERS_EDIT_VIEW, <UserUpsert/>, false);
	provide(VIEWS.USERS_ROLES_VIEW, <UserRoles/>, false);
	provide(VIEWS.USERS_LOCK_VIEW, <UserLock/>, false);

	provide(VIEWS.LOCKOUT_REASONS_VIEW, <LockoutReasonIndex/>, false);
	provide(VIEWS.LOCKOUT_REASONS_ADD_VIEW, <LockoutReasonUpsert/>, false);
	provide(VIEWS.LOCKOUT_REASONS_EDIT_VIEW, <LockoutReasonUpsert/>, false);
}
