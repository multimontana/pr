import {Action, createReducer, on} from "@ngrx/store";
import {AuthStateInterface} from "../types/authState.interface";
import {registerAction} from "./actions/register.action";

const initialState: AuthStateInterface = {
  isSubmitting: false
}

export const authReducer = createReducer(initialState, on(
  registerAction,
  (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
  })))

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
};
