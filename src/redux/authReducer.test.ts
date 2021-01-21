import * as actions from './actions';
import { authReducer } from './authReducer';
import { AuthType } from '../api/api';

describe('auth reducer', () => {
  let state: AuthType;

  beforeEach(() => {
    state = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
    };
  });

  test('should handle setAuthUserData', () => {
    // 1. data
    const userAuthData = {
      id: 4,
      email: 'tough.ass.dude@me.com',
      login: 'yoyo',
      isAuth: true,
    };

    // 2. action
    const action = actions.setAuthUserData(userAuthData);

    const newState = authReducer(state, action);

    // 3. expectation
    expect(newState).toEqual(userAuthData);
  });
});
