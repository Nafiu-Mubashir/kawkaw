// src/redux/reducers/authSlice.ts

import { AuthState, User } from '~/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  registeredUsers: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.registeredUsers.push(action.payload);
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    clearRegisteredUsers: (state) => {
      state.registeredUsers = [];
    },
  },
});

export const {
  registerSuccess,
  registerFail,
  loginSuccess,
  loginFail,
  logout,
  clearRegisteredUsers,
} = authSlice.actions;

export default authSlice.reducer;
