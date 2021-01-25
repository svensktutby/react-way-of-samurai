import * as users from './usersReducer';

describe('Users page', () => {
  let state: users.UsersPageStateType;

  beforeEach(() => {
    state = {
      users: [
        {
          id: 1,
          name: 'John',
          photos: {
            small: '',
            large: '',
          },
          status: '',
          followed: true,
        },
        {
          id: 2,
          name: 'Andrei',
          photos: {
            small: '',
            large: '',
          },
          status: '',
          followed: false,
        },
      ],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: false,
      followingInProgress: [],
    };
  });

  test('should handle follow', () => {
    // 1. data

    // 2. action
    const action = users.follow(1);

    const newState = users.usersReducer(state, action);

    // 3. expectation
    expect(newState.users[0].followed).toBeTruthy();
  });

  test('should handle unfollow', () => {
    const action = users.unfollow(2);

    const newState = users.usersReducer(state, action);

    expect(newState.users[1].followed).toBeFalsy();
  });

  test('should handle setUsers', () => {
    const newUsers = [
      {
        id: 3,
        name: 'Kastus',
        photos: {
          small: '',
          large: '',
        },
        status: '',
        followed: false,
      },
    ];

    const action = users.setUsers(newUsers);

    const newState = users.usersReducer(state, action);

    expect(newState.users).toHaveLength(1);
    expect(newState.users[0].name).toBe('Kastus');
  });

  test('should handle setCurrentPage', () => {
    const action = users.setCurrentPage(3);

    const newState = users.usersReducer(state, action);

    expect(newState.currentPage).toBe(3);
  });

  test('should handle setUsersTotalCount', () => {
    const action = users.setUsersTotalCount(10);

    const newState = users.usersReducer(state, action);

    expect(newState.totalUsersCount).toBe(10);
  });

  test('should handle toggleIsFetching', () => {
    const action = users.toggleIsFetching(true);

    const newState = users.usersReducer(state, action);

    expect(newState.isFetching).toBeTruthy();
  });

  test('should handle toggleFollowingProgress', () => {
    const action1 = users.toggleFollowingProgress(true, 2);
    const action2 = users.toggleFollowingProgress(true, 3);
    const action3 = users.toggleFollowingProgress(false, 3);

    const newState1 = users.usersReducer(state, action1);
    const newState2 = users.usersReducer(newState1, action2);
    const newState3 = users.usersReducer(newState2, action3);

    expect(newState1.followingInProgress).toEqual([2]);
    expect(newState2.followingInProgress).toEqual([2, 3]);
    expect(newState3.followingInProgress).toEqual([2]);
  });
});
