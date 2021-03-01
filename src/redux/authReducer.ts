import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FormAction, stopSubmit } from 'redux-form';

import { authApi, LoginDataType } from '../api/authApi';
import { ResultCode } from '../api/api';
import { InferActionsType } from '../types/types';

export enum ActionType {
  SET_AUTH_USER_DATA = 'SN/AUTH/SET_AUTH_USER_DATA',
}

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthStateType => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

/** Actions */
export const actions = {
  setAuthUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
  ) =>
    ({
      type: ActionType.SET_AUTH_USER_DATA,
      payload: { id, email, login, isAuth },
    } as const),
};

/** Thunks */
export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const data = await authApi.me();

  if (data.resultCode === ResultCode.Success) {
    const { id, email, login } = data.data;

    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login = (loginData: LoginDataType): ThunkType => async (
  dispatch,
) => {
  const data = await authApi.login(loginData);

  if (data.resultCode === ResultCode.Success) {
    await dispatch(getAuthUserData());
  } else {
    const message = data.messages.length ? data.messages[0] : 'Some error';

    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authApi.logout();

  if (data.resultCode === ResultCode.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

/** Types */
export type AuthStateType = typeof initialState;

export type AuthActionsType = InferActionsType<typeof actions>;

type ThunkType<
  A extends Action = AuthActionsType | FormAction,
  R = Promise<void>,
  S = { auth: AuthStateType }
> = ThunkAction<R, S, unknown, A>;
