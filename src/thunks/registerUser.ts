import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RegisterModel, REGISTER_USER_REQUEST } from '../store/auth/types';
import {
  registerUserSuccess,
  registerUserFailure
} from '../store/auth/actions';
import { AppState } from '../store';

export const registerUser = (
  registerModel: RegisterModel
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch({ type: REGISTER_USER_REQUEST });

  const response = await fetch('http://localhost:5000/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: registerModel.email,
      password: registerModel.password,
      firstName: registerModel.firstName,
      lastName: registerModel.lastName
    })
  });

  if (!response.ok) {
    const json = await response.json();
    dispatch(registerUserFailure(JSON.stringify(json)));
  }
  if (response.status === 201) dispatch(registerUserSuccess());
};
