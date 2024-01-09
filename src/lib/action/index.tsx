// src/redux/actions/authActions.ts

import { clearRegisteredUsers, loginFail, loginSuccess, logout, registerFail, registerSuccess } from '../reducers/authSlice';

import { AppThunk } from '../store';

interface UserData {
  username: string;
  password: string;
}

export const register = (userData: UserData): AppThunk => (dispatch, getState) => {
  // Simulate API call
  // Replace this with an actual API call in a real application
  const registeredUsers = getState().auth.registeredUsers;

  if (registeredUsers.some((user) => user.username === userData.username)) {
    dispatch(registerFail('Username already exists'));
  } else {
    dispatch(registerSuccess({
      username: userData.username,
      email: '',
      password: ''
    }));
  }
};

export const login = (userData: UserData): AppThunk => (dispatch) => {
  // Simulate API call
  // Replace this with an actual API call in a real application
  if (userData.username === 'user' && userData.password === 'password') {
    dispatch(loginSuccess({
      username: 'user',
      email: '',
      password: ''
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
