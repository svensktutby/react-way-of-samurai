import {
  profileReducer,
  addPostAC,
  ProfilePageStateType,
} from './profileReducer';

describe('Profile page', () => {
  let state: ProfilePageStateType;

  beforeEach(() => {
    state = {
      posts: [
        {
          id: '1',
          message: 'Hi, dude!',
          likesCount: 18,
        },
        {
          id: '2',
          message: "It's not my first post",
          likesCount: 3,
        },
      ],
      newPostText: 'it-kamasutra.com',
    };
  });

  test("posts' length should be incremented", function () {
    // 1. data
    const action = addPostAC();

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts).toHaveLength(3);
  });

  test('new post message should be correct', function () {
    // 1. data
    const action = addPostAC();

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].message).toEqual('it-kamasutra.com');
  });
});
