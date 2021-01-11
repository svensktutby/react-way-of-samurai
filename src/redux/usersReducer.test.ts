import { UsersPageType, usersReducer } from './usersReducer';
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  unfollow,
} from './actions';

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
    };
  });

  test("status 'follow' of specified user should be changed", function () {
    // 1. data
    const action = follow(1);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.users[0].followed).toBeFalsy();
  });

  test("status 'unfollow' of specified user should be changed", function () {
    // 1. data
    const action = unfollow(2);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.users[1].followed).toBeTruthy();
  });

  test('users should be changed', function () {
    // 1. data
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

    const action = setUsers(newUsers);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.users).toHaveLength(1);
    expect(newState.users[0].name).toBe('Kastus');
  });

  test('currentPage should be changed', function () {
    // 1. data
    const action = setCurrentPage(3);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.currentPage).toBe(3);
  });

  test('totalUsersCount should be changed', function () {
    // 1. data
    const action = setUsersTotalCount(10);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.totalUsersCount).toBe(10);
  });
});
