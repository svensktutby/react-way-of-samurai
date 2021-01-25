import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { authApi } from '../api/authApi';
import { AuthType, ResultCode } from '../api/api';

export enum ActionType {
  SET_AUTH_USER_DATA = 'SN/AUTH/SET_AUTH_USER_DATA',
}

export type AuthStateType = AuthType & {
  isAuth: boolean;
};

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthStateType => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER_DATA: {
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
  ({ type: ActionType.SET_AUTH_USER_DATA, payload: data } as const);

export type AuthActionsType = ReturnType<typeof setAuthUserData>;

type ThunkType<
  A extends Action = AuthActionsType,
  R = Promise<void>,
  S = AuthType
> = ThunkAction<R, S, unknown, A>;

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const data = await authApi.me();

  if (data.resultCode === ResultCode.Success && data.data) {
    dispatch(setAuthUserData(data.data));
  }
};
