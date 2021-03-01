import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AuthStateType, getAuthUserData } from './authReducer';
import { InferActionsType } from '../types/types';

export enum ActionType {
  INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS',
}

const initialState = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action: AppActionsType,
): AppInitialStateType => {
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
export const actions = {
  initializedSuccess: () =>
    ({
      type: ActionType.INITIALIZED_SUCCESS,
    } as const),
};

/** Thunks */
export const initializeApp = (): ThunkType => async (dispatch) => {
  const AuthUserDataPromise = await dispatch(getAuthUserData());

  Promise.all([AuthUserDataPromise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

/** Types */
export type AppInitialStateType = typeof initialState;

export type AppActionsType = InferActionsType<typeof actions>;

type ThunkType<
  A extends Action = AppActionsType,
  R = Promise<void>,
  S = { app: AppInitialStateType; auth: AuthStateType }
> = ThunkAction<R, S, unknown, A>;
