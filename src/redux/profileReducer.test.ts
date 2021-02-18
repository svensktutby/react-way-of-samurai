import * as profile from './profileReducer';

describe('Profile page', () => {
  let state: profile.ProfilePageStateType;

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
      profile: null,
      status: '',
    };
  });

  it('should handle addPost', () => {
    // 1. data
    const text = 'it-kamasutra.com';
    // 2. action
    const action = profile.addPost(text);

    const newState = profile.profileReducer(state, action);

    // 3. expectation
    expect(newState.posts).toHaveLength(3);
    expect(newState.posts[2].message).toEqual('it-kamasutra.com');
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

    const action = profile.setUserProfile(userProfile);

    const newState = profile.profileReducer(state, action);

    expect(newState.profile).not.toBeNull();
    expect(newState.profile).toEqual(userProfile);
  });

  it('should handle setStatus', () => {
    const status = 'Yo, dude!';

    const action = profile.setStatus(status);

    const newState = profile.profileReducer(state, action);

    expect(newState.status).not.toBeFalsy();
    expect(newState.status).toEqual(status);
  });
});
