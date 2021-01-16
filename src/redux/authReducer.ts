import { ACTIONS_TYPE, AuthActionTypes } from './actions';

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

export type AuthType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: AuthActionTypes,
): AuthType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_AUTH_USER_DATA: {
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
