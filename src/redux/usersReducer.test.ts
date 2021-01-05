import {
  followAC,
  setUsersAC,
  UsersPageType,
  usersReducer,
} from './usersReducer';

describe('Users page', () => {
  const state: UsersPageType = {
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
  };

  it('followed status of specified user should be changed', function () {
    // 1. data
    const action = followAC(1);

    // 2. action
    const newState = usersReducer(state, action);

    // 3. expectation
    expect(newState.users[0].followed).toBeFalsy();
  });

  it('users should be added', function () {
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
    expect(newState.users).toHaveLength(2);
    expect(newState.users[1].name).toBe('Andrei');
  });
});
