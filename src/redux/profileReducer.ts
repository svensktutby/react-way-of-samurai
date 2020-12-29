import { randomId } from '../utils/randomId';
import { PostType } from '../types/types';

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
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.payload };

    case ADD_POST:
      const post: PostType = {
        id: randomId(),
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [post, ...state.posts], newPostText: '' };

    default:
      return state;
  }
};

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const changePostAC = (payload: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, payload } as const);

const ADD_POST = 'ADD_POST';
export const addPostAC = () => ({ type: ADD_POST } as const);

type ProfilePageActionTypes =
  | ReturnType<typeof changePostAC>
  | ReturnType<typeof addPostAC>;
