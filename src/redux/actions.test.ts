import * as profile from './profileReducer';
import * as dialogs from './dialogsReducer';
import * as users from './usersReducer';
import * as auth from './authReducer';
import * as app from './appReducer';

describe('actions', () => {
  it('should create an action to add a post', () => {
    // 1. data
    const text = 'it-kamasutra.com';
    const expectedAction = {
      type: profile.ActionType.ADD_POST,
      payload: text,
    };

    // 2. action
    const action = profile.addPost(text);

    // 3. expectation
    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set a user profile', () => {
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

  it('should create an action to set a status of user', () => {
    const status = 'Yo, dude!';

    const expectedAction = {
      type: profile.ActionType.SET_STATUS,
      payload: status,
    };

    const action = profile.setStatus(status);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to send a message', () => {
    const message = 'I wish you happy holidays';
    const expectedAction = {
      type: dialogs.ActionType.SEND_MESSAGE,
      payload: message,
    };

    const action = dialogs.sendMessage(message);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to follow a user', () => {
    const userId = 3;
    const expectedAction = {
      type: users.ActionType.FOLLOW,
      payload: userId,
    };

    const action = users.follow(userId);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to unfollow a user', () => {
    const userId = 2;
    const expectedAction = {
      type: users.ActionType.UNFOLLOW,
      payload: userId,
    };

    const action = users.unfollow(userId);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set users', () => {
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

  it('should create an action to set the current page', () => {
    const pageNumber = 5;
    const expectedAction = {
      type: users.ActionType.SET_CURRENT_PAGE,
      payload: pageNumber,
    };

    const action = users.setCurrentPage(pageNumber);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set a users total count', () => {
    const totalCount = 50;
    const expectedAction = {
      type: users.ActionType.SET_USERS_TOTAL_COUNT,
      payload: totalCount,
    };

    const action = users.setUsersTotalCount(totalCount);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to toggle isFetching', () => {
    const isFetching = true;
    const expectedAction = {
      type: users.ActionType.TOGGLE_IS_FETCHING,
      payload: isFetching,
    };

    const action = users.toggleIsFetching(isFetching);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to toggle following progress', () => {
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

  it('should create an action to set auth user data', () => {
    const userAuthData = {
      id: 4,
      email: 'tough.ass.dude@me.com',
      login: 'yoyo',
      isAuth: true,
    };

    const expectedAction = {
      type: auth.ActionType.SET_AUTH_USER_DATA,
      payload: userAuthData,
    };

    const { id, email, login, isAuth } = userAuthData;
    const action = auth.setAuthUserData(id, email, login, isAuth);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to initialize App', () => {
    const expectedAction = {
      type: app.ActionType.INITIALIZED_SUCCESS,
    };

    const action = app.initializedSuccess();

    expect(action).toEqual(expectedAction);
  });
});
