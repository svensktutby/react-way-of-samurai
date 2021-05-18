import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import type { ThunkDispatch } from 'redux-thunk';

import {
  actions,
  initialState,
  fetchUsers,
  followUser,
  unfollowUser,
} from './usersReducer';
import type { UsersPageActionsType } from './usersReducer';
import { usersApi } from '../api/usersApi';
import { ResultCode } from '../api/api';
import type { ApiResponseType, ItemsResponseType } from '../api/api';
import type { UserType } from '../types/types';
import type { AppStateType } from './reduxStore';

type DispatchExts = ThunkDispatch<AppStateType, void, UsersPageActionsType>;

jest.mock('../api/usersApi');

const middleware = [thunk];
const mockStore = configureMockStore<AppStateType, DispatchExts>(middleware);
const usersApiMock = usersApi as jest.Mocked<typeof usersApi>;

describe('users async actions', () => {
  it('should dispatch requestUsers thunk', async () => {
    // 1. arrange
    const responsePayload: ItemsResponseType<UserType> = {
      items: [
        {
          id: 1,
          name: 'Andy',
          photos: {
            small: '',
            large: '',
          },
          status: '',
          followed: true,
        },
      ],
      totalCount: 5,
      error: null,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ usersPage: initialState });
    usersApiMock.getUsers.mockResolvedValueOnce(responsePayload);

    // 2. act
    await store.dispatch(fetchUsers(1, 5, { term: '', friend: null }));

    // 3. assert
    const expectedActions = [
      actions.toggleIsFetching(true),
      actions.setCurrentPage(1),
      actions.setFilter({ term: '', friend: null }),
      actions.toggleIsFetching(false),
      actions.setUsers(responsePayload.items),
      actions.setUsersTotalCount(responsePayload.totalCount),
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch followUser thunk', async () => {
    const requestPayload = 3;

    const responsePayload: ApiResponseType = {
      resultCode: ResultCode.Success,
      messages: [],
      data: {},
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ usersPage: initialState });
    usersApiMock.follow.mockResolvedValueOnce(responsePayload);

    await store.dispatch(followUser(requestPayload));

    const expectedActions = [
      actions.toggleFollowingProgress(true, requestPayload),
      actions.follow(requestPayload),
      actions.toggleFollowingProgress(false, requestPayload),
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch unfollowUser thunk', async () => {
    const requestPayload = 2;

    const responsePayload: ApiResponseType = {
      resultCode: ResultCode.Success,
      messages: [],
      data: {},
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = mockStore({ usersPage: initialState });
    usersApiMock.unfollow.mockResolvedValueOnce(responsePayload);

    await store.dispatch(unfollowUser(requestPayload));

    const expectedActions = [
      actions.toggleFollowingProgress(true, requestPayload),
      actions.unfollow(requestPayload),
      actions.toggleFollowingProgress(false, requestPayload),
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
