import { randomId } from '../utils/randomId';
import { PostType } from '../types/types';
import { ACTIONS_TYPE, ProfilePageActionTypes } from './actions';

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
};

export type ProfilePageStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: ProfilePageActionTypes,
): ProfilePageStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.payload };

    case ACTIONS_TYPE.ADD_POST:
      const post: PostType = {
        id: randomId(),
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, post], newPostText: '' };

    default:
      return state;
  }
};
