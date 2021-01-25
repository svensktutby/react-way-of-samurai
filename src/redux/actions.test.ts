import * as profile from './profileReducer';
import * as dialogs from './dialogsReducer';
import * as users from './usersReducer';
import * as auth from './authReducer';

describe('actions', () => {
  test('should create an action to change a post', () => {
    // 1. data
    const text = 'Hi, there!';
    const expectedAction = {
      type: profile.ActionType.UPDATE_NEW_POST_TEXT,
      payload: text,
    };

    // 2. action
    const action = profile.changePost(text);

    // 3. expectation
    expect(action).toEqual(expectedAction);
  });

  test('should create an action to add a post', () => {
    const expectedAction = {
      type: profile.ActionType.ADD_POST,
    };

    const action = profile.addPost();

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to set a user profile', () => {
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

    const expectedAction = {
      type: profile.ActionType.SET_USER_PROFILE,
      payload: userProfile,
    };

    const action = profile.setUserProfile(userProfile);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to change a message', () => {
    const message = 'Yo, dude';
    const expectedAction = {
      type: dialogs.ActionType.UPDATE_NEW_MESSAGE_TEXT,
      payload: message,
    };

    const action = dialogs.changeMessage(message);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to send a message', () => {
    const expectedAction = {
      type: dialogs.ActionType.SEND_MESSAGE,
    };

    const action = dialogs.sendMessage();

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to follow a user', () => {
    const userId = 3;
    const expectedAction = {
      type: users.ActionType.FOLLOW,
      payload: userId,
    };

    const action = users.follow(userId);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to unfollow a user', () => {
    const userId = 2;
    const expectedAction = {
      type: users.ActionType.UNFOLLOW,
      payload: userId,
    };

    const action = users.unfollow(userId);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to set users', () => {
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

    const expectedAction = {
      type: users.ActionType.SET_USERS,
      payload: newUsers,
    };

    const action = users.setUsers(newUsers);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to set the current page', () => {
    const pageNumber = 5;
    const expectedAction = {
      type: users.ActionType.SET_CURRENT_PAGE,
      payload: pageNumber,
    };

    const action = users.setCurrentPage(pageNumber);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to set a users total count', () => {
    const totalCount = 50;
    const expectedAction = {
      type: users.ActionType.SET_USERS_TOTAL_COUNT,
      payload: totalCount,
    };

    const action = users.setUsersTotalCount(totalCount);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to toggle isFetching', () => {
    const isFetching = true;
    const expectedAction = {
      type: users.ActionType.TOGGLE_IS_FETCHING,
      payload: isFetching,
    };

    const action = users.toggleIsFetching(isFetching);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to toggle following progress', () => {
    const isFetching = true;
    const userId = 7;
    const expectedAction = {
      type: users.ActionType.TOGGLE_IS_FOLLOWING_PROGRESS,
      payload: {
        isFetching,
        userId,
      },
    };

    const action = users.toggleFollowingProgress(isFetching, userId);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to set auth user data', () => {
    const data = {
      id: 4,
      email: null,
      login: null,
      isAuth: true,
    };
    const expectedAction = {
      type: auth.ActionType.SET_AUTH_USER_DATA,
      payload: data,
    };

    const action = auth.setAuthUserData(data);

    expect(action).toEqual(expectedAction);
  });
});
