import { stopSubmit } from 'redux-form';
import type { FormAction } from 'redux-form';

import { authApi } from '../api/authApi';
import type { LoginDataType } from '../api/authApi';
import { securityApi } from '../api/securityApi';
import { ResultCode, ResultCodeCaptcha } from '../api/api';
import type { InferActionsType } from '../types/types';
import type { ThunkType } from './reduxStore';

export enum ActionType {
  SET_AUTH_USER_DATA = 'SN/AUTH/SET_AUTH_USER_DATA',
  SET_CAPTCHA_URL = 'SN/AUTH/SET_CAPTCHA_URL',
}

export const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthStateType => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER_DATA:
    case ActionType.SET_CAPTCHA_URL:
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
  setCaptchaUrl: (captchaUrl: string) =>
    ({
      type: ActionType.SET_CAPTCHA_URL,
      payload: { captchaUrl },
    } as const),
};

/** Thunks */
export const getAuthUserData = (): ThunkType<AuthActionsType> => async (
  dispatch,
) => {
  const data = await authApi.me();

  if (data.resultCode === ResultCode.Success) {
    const { id, email, login } = data.data;

    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const getCaptchaUrl = (): ThunkType<AuthActionsType> => async (
  dispatch,
) => {
  const data = await securityApi.getCaptchaUrl();

  if (data.url) {
    await dispatch(actions.setCaptchaUrl(data.url));
  }
};

export const login = (
  loginData: LoginDataType,
): ThunkType<AuthActionsType | FormAction> => async (dispatch) => {
  const data = await authApi.login(loginData);

  if (data.resultCode === ResultCode.Success) {
    await dispatch(getAuthUserData());
  } else {
    if (data.resultCode === ResultCodeCaptcha.Required) {
      await dispatch(getCaptchaUrl());
    }

    const message = data.messages.length ? data.messages[0] : 'Some error';

    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = (): ThunkType<AuthActionsType> => async (dispatch) => {
  const data = await authApi.logout();

  if (data.resultCode === ResultCode.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

/** Types */
export type AuthStateType = typeof initialState;

export type AuthActionsType = InferActionsType<typeof actions>;
