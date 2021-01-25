import { usersApi } from '../api/usersApi';
import { AuthType } from '../api/api';
import { ProfileType, UserType } from '../types/types';
import { profileApi } from '../api/profileApi';
import { authApi } from '../api/authApi';
import { AppThunkType } from './reduxStore';

export enum ActionsType {
  UPDATE_NEW_POST_TEXT = 'SN/PROFILE/UPDATE_NEW_POST_TEXT',
  ADD_POST = 'SN/PROFILE/ADD_POST',
  SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE',

  UPDATE_NEW_MESSAGE_TEXT = 'SN/DIALOGS/UPDATE_NEW_MESSAGE_TEXT',
  SEND_MESSAGE = 'SN/DIALOGS/SEND_MESSAGE',

  FOLLOW = 'SN/USERS/FOLLOW',
  UNFOLLOW = 'SN/USERS/UNFOLLOW',
  SET_USERS = 'SN/USERS/SET_USERS',
  SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE',
  SET_USERS_TOTAL_COUNT = 'SN/USERS/SET_USERS_TOTAL_COUNT',
  TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',

  SET_AUTH_USER_DATA = 'SN/AUTH/SET_AUTH_USER_DATA',
}

// Profile actions
export const changePost = (text: string) =>
  ({ type: ActionsType.UPDATE_NEW_POST_TEXT, payload: text } as const);

export const addPost = () => ({ type: ActionsType.ADD_POST } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({ type: ActionsType.SET_USER_PROFILE, payload: profile } as const);

export type ProfilePageActionsType =
  | ReturnType<typeof changePost>
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>;

export const getProfile = (
  userId: number,
): AppThunkType<ProfilePageActionsType> => async (dispatch) => {
  const data = await profileApi.getProfile(userId);
  dispatch(setUserProfile(data));
};

// Dialogs actions
export const changeMessage = (message: string) =>
  ({ type: ActionsType.UPDATE_NEW_MESSAGE_TEXT, payload: message } as const);

export const sendMessage = () => ({ type: ActionsType.SEND_MESSAGE } as const);

export type DialogsPageActionsType =
  | ReturnType<typeof changeMessage>
  | ReturnType<typeof sendMessage>;

// Users actions
export const follow = (userId: number) =>
  ({ type: ActionsType.FOLLOW, payload: userId } as const);

export const unfollow = (userId: number) =>
  ({ type: ActionsType.UNFOLLOW, payload: userId } as const);

export const setUsers = (users: Array<UserType>) =>
  ({ type: ActionsType.SET_USERS, payload: users } as const);

export const setCurrentPage = (page: number) =>
  ({ type: ActionsType.SET_CURRENT_PAGE, payload: page } as const);

export const setUsersTotalCount = (totalCount: number) =>
  ({ type: ActionsType.SET_USERS_TOTAL_COUNT, payload: totalCount } as const);

export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: ActionsType.TOGGLE_IS_FETCHING, payload: isFetching } as const);

export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
  ({
    type: ActionsType.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {
      isFetching,
      userId,
    },
  } as const);

export type UsersPageActionsType =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>;

export const getUsers = (
  page: number,
  pageSize: number,
): AppThunkType<UsersPageActionsType> => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  const data = await usersApi.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersTotalCount(data.totalCount));
};

export const followUser = (
  userId: number,
): AppThunkType<UsersPageActionsType> => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  const data = await usersApi.follow(userId);
  if (data.resultCode === 0) {
    dispatch(follow(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollowUser = (
  userId: number,
): AppThunkType<UsersPageActionsType> => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  const data = await usersApi.unfollow(userId);
  if (data.resultCode === 0) {
    dispatch(unfollow(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

// Auth actions
export const setAuthUserData = (data: AuthType) =>
  ({ type: ActionsType.SET_AUTH_USER_DATA, payload: data } as const);

export type AuthActionsType = ReturnType<typeof setAuthUserData>;

export const getAuthUserData = (): AppThunkType<AuthActionsType> => async (
  dispatch,
) => {
  const data = await authApi.me();
  if (data.resultCode === 0 && data.data) {
    dispatch(setAuthUserData(data.data));
  }
};
