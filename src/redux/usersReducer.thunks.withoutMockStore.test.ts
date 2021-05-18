import { actions, fetchUsers, followUser, unfollowUser } from './usersReducer';
import { ResultCode } from '../api/api';
import type { ApiResponseType, ItemsResponseType } from '../api/api';
import { usersApi } from '../api/usersApi';
import type { UserType } from '../types/types';

jest.mock('../api/usersApi');

describe('users async actions without mock store', () => {
  const usersApiMock = usersApi as jest.Mocked<typeof usersApi>;

  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
  });

  const usersResponse: ItemsResponseType<UserType> = {
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

  const followResponse: ApiResponseType = {
    resultCode: ResultCode.Success,
    messages: [],
    data: {},
  };

  it('should handle requestUsers thunk', async () => {
    usersApiMock.getUsers.mockResolvedValue(usersResponse);

    const thunk = fetchUsers(1, 5, { term: '', friend: null });

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(6);
    expect(dispatchMock).toHaveBeenNthCalledWith(
      1,
      actions.toggleIsFetching(true),
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setCurrentPage(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(
      3,
      actions.setFilter({ term: '', friend: null }),
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(
      4,
      actions.toggleIsFetching(false),
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(
      5,
      actions.setUsers(usersResponse.items),
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(
      6,
      actions.setUsersTotalCount(usersResponse.totalCount),
    );
  });

  it('should handle followUser thunk', async () => {
    usersApiMock.follow.mockResolvedValue(followResponse);

    const thunk = followUser(1);

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(
      1,
      actions.toggleFollowingProgress(true, 1),
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(
      3,
      actions.toggleFollowingProgress(false, 1),
    );
  });

  it('should handle unfollowUser thunk', async () => {
    usersApiMock.unfollow.mockResolvedValue(followResponse);

    const thunk = unfollowUser(1);

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(
      1,
      actions.toggleFollowingProgress(true, 1),
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollow(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(
      3,
      actions.toggleFollowingProgress(false, 1),
    );
  });
});
