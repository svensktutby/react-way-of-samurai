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
      captchaUrl: null,
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
      captchaUrl: null,
    };

    // 2. action
    const { id, email, login, isAuth } = userAuthData;
    const action = auth.actions.setAuthUserData(id, email, login, isAuth);
    deepFreeze(action);

    const newState = auth.authReducer(state, action);

    // 3. expectation
    expect(newState).toEqual(userAuthData);
  });

  it('should handle setCaptchaUrl', () => {
    const action = auth.actions.setCaptchaUrl('http://url.com');
    deepFreeze(action);

    const newState = auth.authReducer(state, action);

    expect(newState.captchaUrl).toBe('http://url.com');
  });
});
