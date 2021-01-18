import { randomId } from '../utils/randomId';
import { PostType, ProfileType } from '../types/types';
import { ActionsType, ProfilePageActionTypes } from './actions';

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
  action: ProfilePageActionTypes,
): ProfilePageStateType => {
  switch (action.type) {
    case ActionsType.UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.payload };

    case ActionsType.ADD_POST: {
      const post: PostType = {
        id: randomId(),
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, post], newPostText: '' };
    }

    case ActionsType.SET_USER_PROFILE:
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};
