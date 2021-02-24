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
    const action = auth.setAuthUserData(id, email, login, isAuth);

    const newState = auth.authReducer(state, action);

    // 3. expectation
    expect(newState).toEqual(userAuthData);
  });
});
