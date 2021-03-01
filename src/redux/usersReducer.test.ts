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

  it('should handle follow', () => {
    // 1. data

    // 2. action
    const action = users.actions.follow(1);

    const newState = users.usersReducer(state, action);

    // 3. expectation
    expect(newState.users[0].followed).toBeTruthy();
  });

  it('should handle unfollow', () => {
    const action = users.actions.unfollow(2);

    const newState = users.usersReducer(state, action);

    expect(newState.users[1].followed).toBeFalsy();
  });

  it('should handle setUsers', () => {
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

    const action = users.actions.setUsers(newUsers);

    const newState = users.usersReducer(state, action);

    expect(newState.users).toHaveLength(1);
    expect(newState.users[0].name).toBe('Kastus');
  });

  it('should handle setCurrentPage', () => {
    const action = users.actions.setCurrentPage(3);

    const newState = users.usersReducer(state, action);

    expect(newState.currentPage).toBe(3);
  });

  it('should handle setUsersTotalCount', () => {
    const action = users.actions.setUsersTotalCount(10);

    const newState = users.usersReducer(state, action);

    expect(newState.totalUsersCount).toBe(10);
  });

  it('should handle toggleIsFetching', () => {
    const action = users.actions.toggleIsFetching(true);

    const newState = users.usersReducer(state, action);

    expect(newState.isFetching).toBeTruthy();
  });

  it('should handle toggleFollowingProgress', () => {
    const action1 = users.actions.toggleFollowingProgress(true, 2);
    const action2 = users.actions.toggleFollowingProgress(true, 3);
    const action3 = users.actions.toggleFollowingProgress(false, 3);

    const newState1 = users.usersReducer(state, action1);
    const newState2 = users.usersReducer(newState1, action2);
    const newState3 = users.usersReducer(newState2, action3);

    expect(newState1.followingInProgress).toEqual([2]);
    expect(newState2.followingInProgress).toEqual([2, 3]);
    expect(newState3.followingInProgress).toEqual([2]);
  });
});
