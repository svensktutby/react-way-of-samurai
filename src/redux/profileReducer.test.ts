import { profileReducer, addPostAC } from './profileReducer';
import { ProfilePageStateType } from './types';

describe('Profile page', () => {
  const state: ProfilePageStateType = {
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

  it("posts' length should be incremented", function () {
    // 1. data
    const action = addPostAC();

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
    expect(newState.posts.length).not.toBe(2);
  });

  it('new post message should be correct', function () {
    // 1. data
    const action = addPostAC();

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com');
  });
});
