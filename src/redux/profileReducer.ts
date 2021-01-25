import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { randomId } from '../utils/randomId';
import { profileApi } from '../api/profileApi';
import { PostType, ProfileType } from '../types/types';

export enum ActionType {
  UPDATE_NEW_POST_TEXT = 'SN/PROFILE/UPDATE_NEW_POST_TEXT',
  ADD_POST = 'SN/PROFILE/ADD_POST',
  SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE',
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
  newPostText: 'it-kamasutra.com',
  profile: null as ProfileType | null,
};

export type ProfilePageStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: ProfilePageActionsType,
): ProfilePageStateType => {
  switch (action.type) {
    case ActionType.UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.payload };

    case ActionType.ADD_POST: {
      const post: PostType = {
        id: randomId(),
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, post], newPostText: '' };
    }

    case ActionType.SET_USER_PROFILE:
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};

export const changePost = (text: string) =>
  ({ type: ActionType.UPDATE_NEW_POST_TEXT, payload: text } as const);

export const addPost = () => ({ type: ActionType.ADD_POST } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({ type: ActionType.SET_USER_PROFILE, payload: profile } as const);

export type ProfilePageActionsType =
  | ReturnType<typeof changePost>
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>;

type ThunkType<
  A extends Action = ProfilePageActionsType,
  R = Promise<void>,
  S = ProfilePageStateType
> = ThunkAction<R, S, unknown, A>;

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileApi.getProfile(userId);

  dispatch(setUserProfile(data));
};
