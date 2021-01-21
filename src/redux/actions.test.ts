import * as actions from './actions';

describe('actions', () => {
  test('should create an action to change a post', () => {
    // 1. data
    const text = 'Hi, there!';
    const expectedAction = {
      type: actions.ActionsType.UPDATE_NEW_POST_TEXT,
      payload: text,
    };

    // 2. action
    const action = actions.changePost(text);

    // 3. expectation
    expect(action).toEqual(expectedAction);
  });

  test('should create an action to add a post', () => {
    const expectedAction = {
      type: actions.ActionsType.ADD_POST,
    };

    const action = actions.addPost();

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
      type: actions.ActionsType.SET_USER_PROFILE,
      payload: userProfile,
    };

    const action = actions.setUserProfile(userProfile);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to change a message', () => {
    const message = 'Yo, dude';
    const expectedAction = {
      type: actions.ActionsType.UPDATE_NEW_MESSAGE_TEXT,
      payload: message,
    };

    const action = actions.changeMessage(message);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to send a message', () => {
    const expectedAction = {
      type: actions.ActionsType.SEND_MESSAGE,
    };

    const action = actions.sendMessage();

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to follow a user', () => {
    const userId = 3;
    const expectedAction = {
      type: actions.ActionsType.FOLLOW,
      payload: userId,
    };

    const action = actions.follow(userId);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to unfollow a user', () => {
    const userId = 2;
    const expectedAction = {
      type: actions.ActionsType.UNFOLLOW,
      payload: userId,
    };

    const action = actions.unfollow(userId);

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
      type: actions.ActionsType.SET_USERS,
      payload: newUsers,
    };

    const action = actions.setUsers(newUsers);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to set the current page', () => {
    const pageNumber = 5;
    const expectedAction = {
      type: actions.ActionsType.SET_CURRENT_PAGE,
      payload: pageNumber,
    };

    const action = actions.setCurrentPage(pageNumber);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to set a users total count', () => {
    const totalCount = 50;
    const expectedAction = {
      type: actions.ActionsType.SET_USERS_TOTAL_COUNT,
      payload: totalCount,
    };

    const action = actions.setUsersTotalCount(totalCount);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to toggle isFetching', () => {
    const isFetching = true;
    const expectedAction = {
      type: actions.ActionsType.TOGGLE_IS_FETCHING,
      payload: isFetching,
    };

    const action = actions.toggleIsFetching(isFetching);

    expect(action).toEqual(expectedAction);
  });

  test('should create an action to toggle following progress', () => {
    const isFetching = true;
    const userId = 7;
    const expectedAction = {
      type: actions.ActionsType.TOGGLE_IS_FOLLOWING_PROGRESS,
      payload: {
        isFetching,
        userId,
      },
    };

    const action = actions.toggleFollowingProgress(isFetching, userId);

    expect(action).toEqual(expectedAction);
  });
});
