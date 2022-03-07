import { SIGN_IN, UPDATE_USER } from "./actionTypes";

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
})