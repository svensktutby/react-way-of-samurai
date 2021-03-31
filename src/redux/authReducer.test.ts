import deepFreeze from 'deep-freeze';

import * as auth from './authReducer';

describe('auth reducer', () => {
  let state: auth.AuthStateType;

  beforeEach(() => {
    state = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
    };

    deepFreeze(state);
  });

  it('should handle setAuthUserData', () => {
    // 1. data
    const userAuthData = {
      id: 4,
      email: 'tough.ass.dude@me.com',
      login: 'yoyo',
      isAuth: true,
    };

    // 2. action
    const { id, email, login, isAuth } = userAuthData;
    const action = auth.actions.setAuthUserData(id, email, login, isAuth);
    deepFreeze(action);

    const newState = auth.authReducer(state, action);

    // 3. expectation
    expect(newState).toEqual(userAuthData);
  });
});
