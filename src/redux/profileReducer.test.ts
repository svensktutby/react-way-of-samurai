import { profileReducer, ProfilePageStateType } from './profileReducer';
import { addPost, changePost, setUserProfile } from './actions';

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
      profile: null,
    };
  });

  test("posts' length should be incremented", () => {
    // 1. data
    const action = addPost();

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts).toHaveLength(3);
  });

  test('new post message should be correct', () => {
    const action = addPost();

    const newState = profileReducer(state, action);

    expect(newState.posts[2].message).toEqual('it-kamasutra.com');
  });

  test("changed post' text should be correct", () => {
    const action = changePost('new text');

    const newState = profileReducer(state, action);

    expect(newState.newPostText).toEqual('new text');
  });

  test('new user profile should be added', () => {
    const newUserProfile = {
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

    const action = setUserProfile(newUserProfile);

    const newState = profileReducer(state, action);

    expect(newState.profile).toEqual(newUserProfile);
  });
});
