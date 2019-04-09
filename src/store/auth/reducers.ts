import {
  AuthState,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  AuthActionTypes
} from './types';
import { saveToken } from '../../utility/localStorage';

const initialState: AuthState = {
  registering: false,
  loggingIn: false,
  isLoggedIn: false,
  token: '',
  error: ''
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, registering: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, registering: false };
    case REGISTER_USER_FAILURE:
      return { ...state, registering: false, error: action.payload };
    case LOGIN_USER_REQUEST:
      return { ...state, loggingIn: true };
    case LOGIN_USER_SUCCESS:
      saveToken(action.payload);
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
        isLoggedIn: true
      };
    case LOGIN_USER_FAILURE:
      return { ...state, loggingIn: false, error: action.payload };
    default:
      return state;
  }
}
