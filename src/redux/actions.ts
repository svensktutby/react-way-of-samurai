import { Dispatch } from 'redux';

import { usersApi } from '../api/usersApi';
import { ApiResponseType, AuthType, UsersResponseType } from '../api/api';
import { ProfileType, UserType } from '../types/types';
import { profileApi } from '../api/profileApi';
import { authApi } from '../api/authApi';

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

export const changePost = (text: string) =>
  ({ type: ActionsType.UPDATE_NEW_POST_TEXT, payload: text } as const);

export const addPost = () => ({ type: ActionsType.ADD_POST } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({ type: ActionsType.SET_USER_PROFILE, payload: profile } as const);

export type ProfilePageActionTypes =
  | ReturnType<typeof changePost>
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>;

// FIXME add return type for getProfile
export const getProfile = (userId: number) => (
  dispatch: Dispatch<ProfilePageActionTypes>,
) => {
  profileApi.getProfile(userId).then((data: ProfileType) => {
    dispatch(setUserProfile(data));
  });
};

export const changeMessage = (message: string) =>
  ({ type: ActionsType.UPDATE_NEW_MESSAGE_TEXT, payload: message } as const);

export const sendMessage = () => ({ type: ActionsType.SEND_MESSAGE } as const);

export type DialogsPageActionTypes =
  | ReturnType<typeof changeMessage>
  | ReturnType<typeof sendMessage>;

export const follow = (userId: number) =>
  ({ type: ActionsType.FOLLOW, payload: userId } as const);

export const unfollow = (userId: number) =>
  ({ type: ActionsType.UNFOLLOW, payload: userId } as const);

export const setUsers = (users: Array<UserType>) =>
  ({ type: ActionsType.SET_USERS, payload: users } as const);

export const setCurrentPage = (pageNumber: number) =>
  ({ type: ActionsType.SET_CURRENT_PAGE, payload: pageNumber } as const);

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

export type UsersPageActionTypes =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>;

// FIXME add return type for getUsers
export const getUsers = (pageNumber: number, pageSize: number) => (
  dispatch: Dispatch<UsersPageActionTypes>,
) => {
  dispatch(toggleIsFetching(true));

  usersApi.getUsers(pageNumber, pageSize).then((data: UsersResponseType) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  });
};

// FIXME add return type for followUser
export const followUser = (userId: number) => (
  dispatch: Dispatch<UsersPageActionTypes>,
) => {
  dispatch(toggleFollowingProgress(true, userId));

  usersApi.follow(userId).then((data: ApiResponseType) => {
    if (data.resultCode === 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

// FIXME add return type for unfollowUser
export const unfollowUser = (userId: number) => (
  dispatch: Dispatch<UsersPageActionTypes>,
) => {
  dispatch(toggleFollowingProgress(true, userId));

  usersApi.unfollow(userId).then((data: ApiResponseType) => {
    if (data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export const setAuthUserData = (data: AuthType) =>
  ({ type: ActionsType.SET_AUTH_USER_DATA, payload: data } as const);

export type AuthActionTypes = ReturnType<typeof setAuthUserData>;

// FIXME add return type for getProfile
export const getAuthUserData = () => (dispatch: Dispatch<AuthActionTypes>) => {
  authApi.me().then((data: ApiResponseType) => {
    if (data.resultCode === 0 && data.data) {
      dispatch(setAuthUserData(data.data));
    }
  });
};
