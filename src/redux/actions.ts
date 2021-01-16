import { ProfileType, UserType } from '../types/types';
import { AuthType } from './authReducer';

export enum ACTIONS_TYPE {
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

  SET_AUTH_USER_DATA = 'SN/AUTH/SET_AUTH_USER_DATA',
}

export const changePost = (text: string) =>
  ({ type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT, payload: text } as const);

export const addPost = () => ({ type: ACTIONS_TYPE.ADD_POST } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({ type: ACTIONS_TYPE.SET_USER_PROFILE, payload: profile } as const);

export type ProfilePageActionTypes =
  | ReturnType<typeof changePost>
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>;

export const changeMessage = (message: string) =>
  ({ type: ACTIONS_TYPE.UPDATE_NEW_MESSAGE_TEXT, payload: message } as const);

export const sendMessage = () => ({ type: ACTIONS_TYPE.SEND_MESSAGE } as const);

export type DialogsPageActionTypes =
  | ReturnType<typeof changeMessage>
  | ReturnType<typeof sendMessage>;

export const follow = (userId: number) =>
  ({ type: ACTIONS_TYPE.FOLLOW, payload: userId } as const);

export const unfollow = (userId: number) =>
  ({ type: ACTIONS_TYPE.UNFOLLOW, payload: userId } as const);

export const setUsers = (users: Array<UserType>) =>
  ({ type: ACTIONS_TYPE.SET_USERS, payload: users } as const);

export const setCurrentPage = (pageNumber: number) =>
  ({ type: ACTIONS_TYPE.SET_CURRENT_PAGE, payload: pageNumber } as const);

export const setUsersTotalCount = (totalCount: number) =>
  ({ type: ACTIONS_TYPE.SET_USERS_TOTAL_COUNT, payload: totalCount } as const);

export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: ACTIONS_TYPE.TOGGLE_IS_FETCHING, payload: isFetching } as const);

export type UsersPageActionTypes =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>;

export const setAuthUserData = (data: AuthType) =>
  ({ type: ACTIONS_TYPE.SET_AUTH_USER_DATA, payload: data } as const);

export type AuthActionTypes = ReturnType<typeof setAuthUserData>;
