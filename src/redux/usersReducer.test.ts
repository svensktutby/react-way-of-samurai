import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  UsersPageType,
  usersReducer,
} from './usersReducer';

describe('Users page', () => {
  let state: UsersPageType;

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
      ],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
    };
  });

  test('followed status of specified user should be changed', function () {
    // 1. data
    const action = followAC(1);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.users[0].followed).toBeFalsy();
  });

  test('users should be changed', function () {
    // 1. data
    const newUsers = [
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
    ];

    const action = setUsersAC(newUsers);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.users).toHaveLength(1);
    expect(newState.users[0].name).toBe('Andrei');
  });

  test('currentPage should be changed', function () {
    // 1. data
    const action = setCurrentPageAC(3);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.currentPage).toBe(3);
  });

  test('totalUsersCount should be changed', function () {
    // 1. data
    const action = setUsersTotalCountAC(10);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.totalUsersCount).toBe(10);
  });
});
