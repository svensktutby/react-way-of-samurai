import { UsersPageType, usersReducer } from './usersReducer';
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleIsFetching,
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
      isFetching: false,
    };
  });

  test("status 'follow' of specified user should be changed", () => {
    // 1. data
    const action = follow(1);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.users[0].followed).toBeTruthy();
  });

  test("status 'unfollow' of specified user should be changed", () => {
    const action = unfollow(2);

    const newState = usersReducer(state, action);

    expect(newState.users[1].followed).toBeFalsy();
  });

  test('users should be changed', () => {
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

    const newState = usersReducer(state, action);

    expect(newState.users).toHaveLength(1);
    expect(newState.users[0].name).toBe('Kastus');
  });

  test('currentPage should be changed', () => {
    const action = setCurrentPage(3);

    const newState = usersReducer(state, action);

    expect(newState.currentPage).toBe(3);
  });

  test('totalUsersCount should be changed', () => {
    const action = setUsersTotalCount(10);

    const newState = usersReducer(state, action);

    expect(newState.totalUsersCount).toBe(10);
  });

  test('fetching status should be changed', () => {
    const action = toggleIsFetching(true);

    const newState = usersReducer(state, action);

    expect(newState.isFetching).toBeTruthy();
  });
});
