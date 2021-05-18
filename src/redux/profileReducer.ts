import { stopSubmit } from 'redux-form';
import type { FormAction } from 'redux-form';

import { randomId } from '../utils/randomId';
import { profileApi } from '../api/profileApi';
import type {
  InferActionsType,
  PhotosType,
  PostType,
  ProfileType,
} from '../types/types';
import { ResultCode } from '../api/api';
import type { ThunkType } from './reduxStore';

export enum ActionType {
  ADD_POST = 'SN/PROFILE/ADD_POST',
  DELETE_POST = 'SN/PROFILE/DELETE_POST',
  SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE',
  SET_STATUS = 'SN/PROFILE/SET_STATUS',
  SET_USER_PHOTO = 'SN/PROFILE/SET_USER_PHOTO',
}

export const initialState = {
  posts: [
    {
      id: randomId(),
      message: 'Hi, dude!',
      likesCount: 12,
    },
    {
      id: randomId(),
      message: 'yo bro',
      likesCount: 8,
    },
    {
      id: randomId(),
      message: 'wazzup',
      likesCount: 111,
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

    case ActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload),
      };

    case ActionType.SET_USER_PROFILE:
      return { ...state, profile: action.payload };

    case ActionType.SET_STATUS:
      return { ...state, status: action.payload };

    case ActionType.SET_USER_PHOTO:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.payload,
        } as ProfileType,
      };

    default:
      return state;
  }
};

/** Actions */
export const actions = {
  addPost: (text: string) =>
    ({ type: ActionType.ADD_POST, payload: text } as const),

  deletePost: (id: string) =>
    ({ type: ActionType.DELETE_POST, payload: id } as const),

  setUserProfile: (profile: ProfileType) =>
    ({ type: ActionType.SET_USER_PROFILE, payload: profile } as const),

  setStatus: (status: string) =>
    ({ type: ActionType.SET_STATUS, payload: status } as const),

  setUserPhoto: (photos: PhotosType) =>
    ({ type: ActionType.SET_USER_PHOTO, payload: photos } as const),
};

/** Thunks */
export const getProfile = (
  userId: number,
): ThunkType<ProfilePageActionsType> => async (dispatch) => {
  const data = await profileApi.getProfile(userId);

  dispatch(actions.setUserProfile(data));
};

export const getStatus = (
  userId: number,
): ThunkType<ProfilePageActionsType> => async (dispatch) => {
  const data = await profileApi.getStatus(userId);

  dispatch(actions.setStatus(data));
};

export const updateStatus = (
  status: string,
): ThunkType<ProfilePageActionsType> => async (dispatch) => {
  try {
    const data = await profileApi.updateStatus(status);

    if (data.resultCode === ResultCode.Success) {
      dispatch(actions.setStatus(status));
    }
  } catch (error) {
    // TODO dispatch error message instead of console
    // eslint-disable-next-line no-console
    console.error('Error: ', { ...error });
  }
};

export const savePhoto = (
  photo: File,
): ThunkType<ProfilePageActionsType> => async (dispatch) => {
  const data = await profileApi.savePhoto(photo);

  if (data.resultCode === ResultCode.Success) {
    dispatch(actions.setUserPhoto(data.data));
  }
};

export const saveProfile = (
  profile: ProfileType,
): ThunkType<ProfilePageActionsType | FormAction> => async (
  dispatch,
  getState,
) => {
  const {
    auth: { id: userId },
  } = getState();

  const data = await profileApi.saveProfile(profile);

  if (data.resultCode === ResultCode.Success) {
    if (userId !== null) {
      await dispatch(getProfile(userId));
    } else {
      throw new Error("userId can't be null");
    }
  } else {
    dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
    await Promise.reject(data.messages[0]);
  }
};

/** Types */
export type ProfilePageStateType = typeof initialState;

export type ProfilePageActionsType = InferActionsType<typeof actions>;
