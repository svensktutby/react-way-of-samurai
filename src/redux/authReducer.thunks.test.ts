import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import {
  actions,
  initialState,
  getAuthUserData,
  getCaptchaUrl,
  logout,
  AuthActionsType,
} from './authReducer';
import { authApi, MeResponseDataType } from '../api/authApi';
import { securityApi, GetCaptchaUrlResponseType } from '../api/securityApi';
import { ApiResponseType, ResultCode } from '../api/api';
import { AppStateType } from './reduxStore';

type DispatchExts = ThunkDispatch<AppStateType, void, AuthActionsType>;

jest.mock('../api/authApi');
jest.mock('../api/securityApi');

const middleware = [thunk];
const mockStore = configureMockStore<AppStateType, DispatchExts>(middleware);
const authApiMock = authApi as jest.Mocked<typeof authApi>;
const securityApiMock = securityApi as jest.Mocked<typeof securityApi>;

describe('auth async actions', () => {
  it('should dispatch getAuthUserData thunk', async () => {
    // 1. arrange
    const data: MeResponseDataType = {
      id: 5,
      email: 'email@test.com',
      login: 'login',
    };

    const responsePayload: ApiResponseType<MeResponseDataType> = {
      resultCode: ResultCode.Success,
      messages: [],
      data,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ auth: initialState });
    authApiMock.me.mockResolvedValueOnce(responsePayload);

    // 2. act
    await store.dispatch(getAuthUserData());

    // 3. assert
    const expectedActions = [
      actions.setAuthUserData(data.id, data.email, data.login, true),
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch getCaptchaUrl thunk', async () => {
    const responsePayload: GetCaptchaUrlResponseType = {
      url: 'http://some.url',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ auth: initialState });
    securityApiMock.getCaptchaUrl.mockResolvedValueOnce(responsePayload);

    await store.dispatch(getCaptchaUrl());

    const expectedActions = [actions.setCaptchaUrl(responsePayload.url)];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch logout thunk', async () => {
    const responsePayload: ApiResponseType = {
      resultCode: ResultCode.Success,
      messages: [],
      data: {},
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ auth: initialState });
    authApiMock.logout.mockResolvedValueOnce(responsePayload);

    await store.dispatch(logout());

    const expectedActions = [actions.setAuthUserData(null, null, null, false)];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
