import type { InjectionKey } from '@sienar/utils';

export const ABOUT_URL = Symbol() as InjectionKey<string>;
export const TOS_URL = Symbol() as InjectionKey<string>;
export const PRIVACY_POLICY_URL = Symbol() as InjectionKey<string>;

// region Account

export const CHANGE_EMAIL_URL = Symbol() as InjectionKey<string>;
export const CHANGE_EMAIL_CONFIRM_URL = Symbol() as InjectionKey<string>;
export const CHANGE_EMAIL_REQUESTED_URL = Symbol() as InjectionKey<string>;
export const CHANGE_EMAIL_SUCCESSFUL_URL = Symbol() as InjectionKey<string>;
export const CHANGE_PASSWORD_URL = Symbol() as InjectionKey<string>;
export const CHANGE_PASSWORD_SUCCESSFUL_URL = Symbol() as InjectionKey<string>;
export const CONFIRM_URL = Symbol() as InjectionKey<string>;
export const CONFIRM_SUCCESSFUL_URL = Symbol() as InjectionKey<string>;
export const DELETE_ACCOUNT_URL = Symbol() as InjectionKey<string>;
export const ACCOUNT_DELETED_URL = Symbol() as InjectionKey<string>;
export const DOWNLOAD_PERSONAL_DATA_URL = Symbol() as InjectionKey<string>;
export const FORGOT_PASSWORD_URL = Symbol() as InjectionKey<string>;
export const FORGOT_PASSWORD_SUCCESSFUL_URL = Symbol() as InjectionKey<string>;
export const LOGIN_URL = Symbol() as InjectionKey<string>;
export const PERSONAL_DATA_URL = Symbol() as InjectionKey<string>;
export const REGISTER_URL = Symbol() as InjectionKey<string>;
export const REGISTER_SUCCESSFUL_URL = Symbol() as InjectionKey<string>;
export const RESET_PASSWORD_URL = Symbol() as InjectionKey<string>;
export const RESET_PASSWORD_SUCCESSFUL_URL = Symbol() as InjectionKey<string>;
export const ACCOUNT_LOCKED_URL = Symbol() as InjectionKey<string>;

// endregion

// region Users

export const USERS_URL = Symbol() as InjectionKey<string>;
export const USERS_ADD_URL = Symbol() as InjectionKey<string>;
export const USERS_EDIT_URL = Symbol() as InjectionKey<string>;
export const USERS_ROLES_URL = Symbol() as InjectionKey<string>;
export const USERS_LOCK_URL = Symbol() as InjectionKey<string>;

// endregion

// region Lockout reasons

export const LOCKOUT_REASONS_URL = Symbol() as InjectionKey<string>;
export const LOCKOUT_REASONS_ADD_URL = Symbol() as InjectionKey<string>;
export const LOCKOUT_REASONS_EDIT_URL = Symbol() as InjectionKey<string>;

// endregion