import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AuthStateType, getAuthUserData } from './authReducer';

export enum ActionType {
  INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS',
}

const initialState = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action: AppActionsType,
): InitialStateType => {
  switch (action.type) {
    case ActionType.INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

/** Actions */
export const initializedSuccess = () =>
  ({
    type: ActionType.INITIALIZED_SUCCESS,
  } as const);

export type AppActionsType = ReturnType<typeof initializedSuccess>;

/** Thunks */
export const initializeApp = (): ThunkType => async (dispatch) => {
  const AuthUserDataPromise = await dispatch(getAuthUserData());

  Promise.all([AuthUserDataPromise]).then(() => {
    dispatch(initializedSuccess());
  });
};

/** Types */
export type InitialStateType = typeof initialState;

type ThunkType<
  A extends Action = AppActionsType,
  R = Promise<void>,
  S = { app: InitialStateType; auth: AuthStateType }
> = ThunkAction<R, S, unknown, A>;
