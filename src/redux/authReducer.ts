import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { authApi } from '../api/authApi';
import { AuthType } from '../api/api';

export enum ActionsType {
  SET_AUTH_USER_DATA = 'SN/AUTH/SET_AUTH_USER_DATA',
}

const initialState: AuthType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthType => {
  switch (action.type) {
    case ActionsType.SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (data: AuthType) =>
  ({ type: ActionsType.SET_AUTH_USER_DATA, payload: data } as const);

export type AuthActionsType = ReturnType<typeof setAuthUserData>;

type ThunkType<
  A extends Action = AuthActionsType,
  R = Promise<void>,
  S = AuthType
> = ThunkAction<R, S, unknown, A>;

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const data = await authApi.me();
  if (data.resultCode === 0 && data.data) {
    dispatch(setAuthUserData(data.data));
  }
};
