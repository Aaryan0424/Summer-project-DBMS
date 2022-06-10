import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/Userconstants";

import { createReducer } from "@reduxjs/toolkit";

export const UserLoginReducer = createReducer([], (builder) => {
  builder
    .addCase(USER_LOGIN_REQUEST, (state, action) => {
      return { loading: true };
    })
    .addCase(USER_LOGIN_SUCCESS, (state, action) => {
      return { loading: false, userInfo: action.payload };
    })
    .addCase(USER_LOGIN_FAIL, (state, action) => {
      return { loading: false, error: action.payload };
    })
    .addDefaultCase((state, action) => {
        return state;
    })
});

export const UserRegisterReducer = createReducer([], (builder) => {
  builder
    .addCase(USER_REGISTER_REQUEST, (state, action) => {
      return { loading: true };
    })
    .addCase(USER_REGISTER_SUCCESS, (state, action) => {
      return { loading: false, userInfo: action.payload };
    })
    .addCase(USER_REGISTER_FAIL, (state, action) => {
      return { loading: false, error: action.payload };
    })
    .addDefaultCase((state, action) => {
        return state;
    })
});