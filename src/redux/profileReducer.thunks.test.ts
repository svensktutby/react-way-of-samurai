import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import type { ThunkDispatch } from 'redux-thunk';

import {
  actions,
  initialState,
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from './profileReducer';
import type { ProfilePageActionsType } from './profileReducer';
import { profileApi } from '../api/profileApi';
import { ResultCode } from '../api/api';
import type { ApiResponseType } from '../api/api';
import type { PhotosType, ProfileType } from '../types/types';
import type { AppStateType } from './reduxStore';

type DispatchExts = ThunkDispatch<AppStateType, void, ProfilePageActionsType>;

jest.mock('../api/profileApi');

const middleware = [thunk];
const mockStore = configureMockStore<AppStateType, DispatchExts>(middleware);
const profileApiMock = profileApi as jest.Mocked<typeof profileApi>;

describe('profile async actions', () => {
  it('should dispatch getProfile thunk', async () => {
    // 1. arrange
    const requestPayload = 2;

    const responsePayload: ProfileType = {
      userId: 2,
      lookingForAJob: true,
      lookingForAJobDescription: '',
      fullName: 'Andy',
      contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
      },
      photos: {
        small: '',
        large: '',
      },
      aboutMe: '',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ profilePage: initialState });
    profileApiMock.getProfile.mockResolvedValueOnce(responsePayload);

    // 2. act
    await store.dispatch(getProfile(requestPayload));

    // 3. assert
    const expectedActions = [actions.setUserProfile(responsePayload)];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch getStatus thunk', async () => {
    const requestPayload = 2;

    const responsePayload = 'status';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ profilePage: initialState });
    profileApiMock.getStatus.mockResolvedValueOnce(responsePayload);

    await store.dispatch(getStatus(requestPayload));

    const expectedActions = [actions.setStatus(responsePayload)];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch updateStatus thunk', async () => {
    const requestPayload = 'status';

    const responsePayload: ApiResponseType = {
      resultCode: ResultCode.Success,
      messages: [],
      data: {},
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ profilePage: initialState });
    profileApiMock.updateStatus.mockResolvedValueOnce(responsePayload);

    await store.dispatch(updateStatus(requestPayload));

    const expectedActions = [actions.setStatus(requestPayload)];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch savePhoto thunk', async () => {
    const requestPayload: File = new File(['(⌐□_□)'], 'photo.png', {
      type: 'image/png',
    });

    const data: PhotosType = {
      small: '',
      large: '',
    };

    const responsePayload: ApiResponseType<PhotosType> = {
      resultCode: ResultCode.Success,
      messages: [],
      data,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ profilePage: initialState });
    profileApiMock.savePhoto.mockResolvedValueOnce(responsePayload);

    await store.dispatch(savePhoto(requestPayload));

    const expectedActions = [actions.setUserPhoto(responsePayload.data)];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
