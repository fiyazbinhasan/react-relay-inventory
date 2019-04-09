import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { LoginModel, LOGIN_USER_REQUEST } from '../store/auth/types';
import { loginUserSuccess, loginUserFailure } from '../store/auth/actions';
import { AppState } from '../store';

export const loginUser = (
  loginModel: LoginModel
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch({ type: LOGIN_USER_REQUEST });
  const response = await fetch('http://localhost:5000/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=password&username=${loginModel.userName}&password=${
      loginModel.password
    }`
  });
  const json = await response.json();
  if (!response.ok) dispatch(loginUserFailure(JSON.stringify(json)));
  else dispatch(loginUserSuccess(json.access_token));
};
