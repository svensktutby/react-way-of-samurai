import { authReducer } from './authReducer';
import { setAuthUserData } from './actions';
import { AuthType } from '../types/types';

describe('Auth', () => {
  let state: AuthType;

  beforeEach(() => {
    state = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
    };
  });

  test('auth user data should be changed', () => {
    // 1. data
    const userAuthData = {
      id: 4,
      email: 'tough.ass.dude@me.com',
      login: 'yoyo',
      isAuth: true,
    };

    const action = setAuthUserData(userAuthData);

    // 2. action
    const newState = authReducer(state, action);

    // 3. expectation
    expect(newState.email).toBe('tough.ass.dude@me.com');
  });
});
