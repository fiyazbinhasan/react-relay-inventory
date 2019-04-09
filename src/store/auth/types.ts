export interface RegisterModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginModel {
  userName: string;
  password: string;
}

export interface AuthState {
  registering: boolean;
  loggingIn: boolean;
  isLoggedIn: boolean;
  token: string;
  error: string;
}

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

interface RegisterUserRequestAction {
  type: typeof REGISTER_USER_REQUEST;
}

interface RegisterUserSuccessAction {
  type: typeof REGISTER_USER_SUCCESS;
}

interface RegisterUserFailureAction {
  type: typeof REGISTER_USER_FAILURE;
  payload: any;
}

interface LoginUserRequestAction {
  type: typeof LOGIN_USER_REQUEST;
}

interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: string;
}

interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  payload: any;
}

export type AuthActionTypes =
  | RegisterUserRequestAction
  | RegisterUserSuccessAction
  | RegisterUserFailureAction
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserFailureAction;
