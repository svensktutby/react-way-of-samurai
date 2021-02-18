import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { randomId } from '../utils/randomId';
import { profileApi } from '../api/profileApi';
import { PostType, ProfileType } from '../types/types';
import { ResultCode } from '../api/api';

export enum ActionType {
  ADD_POST = 'SN/PROFILE/ADD_POST',
  SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE',
  SET_STATUS = 'SN/PROFILE/SET_STATUS',
}

const initialState = {
  posts: [
    {
      id: randomId(),
      message: 'Hi, dude!',
      likesCount: 18,
    },
    {
      id: randomId(),
      message: "It's not my first post",
      likesCount: 3,
    },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
};

export const profileReducer = (
  state = initialState,
  action: ProfilePageActionsType,
): ProfilePageStateType => {
  switch (action.type) {
    case ActionType.ADD_POST: {
      const post: PostType = {
        id: randomId(),
        message: action.payload,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, post] };
    }

    case ActionType.SET_USER_PROFILE:
      return { ...state, profile: action.payload };

    case ActionType.SET_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

/** Actions */
export const addPost = (text: string) =>
  ({ type: ActionType.ADD_POST, payload: text } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({ type: ActionType.SET_USER_PROFILE, payload: profile } as const);

export const setStatus = (status: string) =>
  ({ type: ActionType.SET_STATUS, payload: status } as const);

/** Thunks */
export const getProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileApi.getProfile(userId);

  dispatch(setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileApi.getStatus(userId);

  dispatch(setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const data = await profileApi.updateStatus(status);

  if (data.resultCode === ResultCode.Success) {
    dispatch(setStatus(status));
  }
};

/** Types */
export type ProfilePageStateType = typeof initialState;

export type ProfilePageActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>;

type ThunkType<
  A extends Action = ProfilePageActionsType,
  R = Promise<void>,
  S = { profilePage: ProfilePageStateType }
> = ThunkAction<R, S, unknown, A>;
