import deepFreeze from 'deep-freeze';

import * as profile from './profileReducer';

describe('profile reducer', () => {
  let state: profile.ProfilePageStateType;

  beforeEach(() => {
    state = {
      posts: [
        {
          id: '1',
          message: 'Hi, dude!',
          likesCount: 12,
        },
        {
          id: '2',
          message: 'yo bro',
          likesCount: 8,
        },
        {
          id: '3',
          message: 'wazzup',
          likesCount: 111,
        },
      ],
      profile: null,
      status: '',
    };

    deepFreeze(state);
  });

  it('should handle addPost', () => {
    // 1. data
    const text = 'it-kamasutra.com';
    // 2. action
    const action = profile.actions.addPost(text);
    deepFreeze(action);

    const newState = profile.profileReducer(state, action);

    // 3. expectation
    expect(newState.posts).toHaveLength(4);
    expect(newState.posts[3].message).toEqual('it-kamasutra.com');
  });

  it('should handle deletePost', () => {
    const postId = '2';

    const action = profile.actions.deletePost(postId);
    deepFreeze(action);

    const newState = profile.profileReducer(state, action);

    expect(newState.posts).toHaveLength(2);
  });

  it('should handle deletePost if id is incorrect', () => {
    const postId = '100';

    const action = profile.actions.deletePost(postId);
    deepFreeze(action);

    const newState = profile.profileReducer(state, action);

    expect(newState.posts).toHaveLength(3);
  });

  it('should handle setUserProfile', () => {
    const userProfile = {
      aboutMe: 'tough-ass dude',
      contacts: {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: '',
      },
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: 'svensktutby',
      userId: 13640,
      photos: {
        small: null,
        large: null,
      },
    };

    const action = profile.actions.setUserProfile(userProfile);
    deepFreeze(action);

    const newState = profile.profileReducer(state, action);

    expect(newState.profile).not.toBeNull();
    expect(newState.profile).toEqual(userProfile);
  });

  it('should handle setStatus', () => {
    const status = 'Yo, dude!';

    const action = profile.actions.setStatus(status);
    deepFreeze(action);

    const newState = profile.profileReducer(state, action);

    expect(newState.status).not.toBeFalsy();
    expect(newState.status).toEqual(status);
  });
});
