// src/redux/actions/authActions.ts

import { clearRegisteredUsers, loginFail, loginSuccess, logout, registerFail, registerSuccess } from '../reducers/authSlice';

import { AppThunk } from '../store';
import { FormValues } from '~/type';

export const register = (userData: FormValues): AppThunk => (dispatch, getState) => {
  const users = getState().auth.registeredUsers;
  // Simulate API call
  // Replace this with an actual API call in a real application

  if (users.some((user) => user.email === userData.email)) {
    dispatch(registerFail('user already exists'));
  } else {
    dispatch(registerSuccess({
      username: userData.username,
      email: userData.email,
      password: userData.password,
    }));
  }
};

export const LoginAction = (userData: FormValues): AppThunk => (dispatch, getState) => {
  // Simulate API call
  // Replace this with an actual API call in a real application
  const users = getState().auth.registeredUsers;
  if (users.some((user) => user.email === userData.email && user.password === userData.password)) {
    dispatch(loginSuccess({
      email: userData.email,
      password: '',
      username: userData.username
    }));
  } else {
    dispatch(loginFail('Login failed'));
  }
};

export const logoutUser = (): AppThunk => (dispatch) => {
  dispatch(logout());
};

export const clearUsers = (): AppThunk => (dispatch) => {
  dispatch(clearRegisteredUsers());
};
