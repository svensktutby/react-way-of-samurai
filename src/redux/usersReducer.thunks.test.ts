import thunk, { ThunkDispatch } from 'redux-thunk';
import createMockStore from 'redux-mock-store';
import deepFreeze from 'deep-freeze';

import {
  actions,
  requestUsers,
  followUser,
  unfollowUser,
  UsersPageStateType,
  UsersPageActionsType,
} from './usersReducer';
import { usersApi } from '../api/usersApi';
import { ApiResponseType, ItemsResponseType, ResultCode } from '../api/api';
import { UserType } from '../types/types';
import { AppStateType } from './reduxStore';

type DispatchExts = ThunkDispatch<AppStateType, void, UsersPageActionsType>;

jest.mock('../api/usersApi');

const middleware = [thunk];
const mockStore = createMockStore<AppStateType, DispatchExts>(middleware);
const usersApiMock = usersApi as jest.Mocked<typeof usersApi>;

describe('users async actions', () => {
  let state: UsersPageStateType;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const store = mockStore({ usersPage: state });

  beforeEach(() => {
    store.clearActions();

    state = {
      users: [],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: false,
      followingInProgress: [],
    };

    deepFreeze(state);
  });

  it('should dispatch requestUsers thunk', () => {
    const response: ItemsResponseType<UserType> = {
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

    usersApiMock.getUsers.mockResolvedValueOnce(response);

    const expectedActions = [
      actions.toggleIsFetching(true),
      actions.setCurrentPage(1),
      actions.toggleIsFetching(false),
      actions.setUsers(response.items),
      actions.setUsersTotalCount(response.totalCount),
    ];

    return store.dispatch(requestUsers(1, 5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch followUser thunk', () => {
    const response: ApiResponseType = {
      resultCode: ResultCode.Success,
      messages: [],
      data: {},
    };

    const userId = 3;

    usersApiMock.follow.mockResolvedValueOnce(response);

    const expectedActions = [
      actions.toggleFollowingProgress(true, userId),
      actions.follow(userId),
      actions.toggleFollowingProgress(false, userId),
    ];

    return store.dispatch(followUser(userId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch unfollowUser thunk', () => {
    const response: ApiResponseType = {
      resultCode: ResultCode.Success,
      messages: [],
      data: {},
    };

    const userId = 2;

    usersApiMock.unfollow.mockResolvedValueOnce(response);

    const expectedActions = [
      actions.toggleFollowingProgress(true, userId),
      actions.unfollow(userId),
      actions.toggleFollowingProgress(false, userId),
    ];

    return store.dispatch(unfollowUser(userId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
