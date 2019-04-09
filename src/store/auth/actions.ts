import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from './types';

export function registerUserSuccess() {
  return {
    type: REGISTER_USER_SUCCESS
  };
}

export function registerUserFailure(error: any) {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error
  };
}

export function loginUserSuccess(token: string) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: token
  };
}

export function loginUserFailure(error: any) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  };
}
