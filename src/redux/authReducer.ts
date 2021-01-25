import { ActionsType, AuthActionsType } from './actions';
import { AuthType } from '../api/api';

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
