import { UserType } from '../types/types';

export enum ACTIONS_TYPE {
  UPDATE_NEW_POST_TEXT = 'PROFILE/UPDATE_NEW_POST_TEXT',
  ADD_POST = 'PROFILE/ADD_POST',

  UPDATE_NEW_MESSAGE_TEXT = 'DIALOGS/UPDATE_NEW_MESSAGE_TEXT',
  SEND_MESSAGE = 'DIALOGS/SEND_MESSAGE',

  FOLLOW = 'USERS/FOLLOW',
  UNFOLLOW = 'USERS/UNFOLLOW',
  SET_USERS = 'USERS/SET_USERS',
  SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE',
  SET_USERS_TOTAL_COUNT = 'USERS/SET_USERS_TOTAL_COUNT',
}

export const changePost = (payload: string) =>
  ({ type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT, payload } as const);

export const addPost = () => ({ type: ACTIONS_TYPE.ADD_POST } as const);

export type ProfilePageActionTypes =
  | ReturnType<typeof changePost>
  | ReturnType<typeof addPost>;

export const changeMessage = (payload: string) =>
  ({ type: ACTIONS_TYPE.UPDATE_NEW_MESSAGE_TEXT, payload } as const);

export const sendMessage = () => ({ type: ACTIONS_TYPE.SEND_MESSAGE } as const);

export type DialogsPageActionTypes =
  | ReturnType<typeof changeMessage>
  | ReturnType<typeof sendMessage>;

export const follow = (payload: number) =>
  ({ type: ACTIONS_TYPE.FOLLOW, payload } as const);

export const unfollow = (payload: number) =>
  ({ type: ACTIONS_TYPE.UNFOLLOW, payload } as const);

export const setUsers = (payload: Array<UserType>) =>
  ({ type: ACTIONS_TYPE.SET_USERS, payload } as const);

export const setCurrentPage = (payload: number) =>
  ({ type: ACTIONS_TYPE.SET_CURRENT_PAGE, payload } as const);

export const setUsersTotalCount = (payload: number) =>
  ({ type: ACTIONS_TYPE.SET_USERS_TOTAL_COUNT, payload } as const);

export type UsersPageActionTypes =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>;
