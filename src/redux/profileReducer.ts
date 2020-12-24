import { randomId } from '../utils/randomId';
import {
  ADD_POST,
  PostType,
  ProfilePageStateType,
  UPDATE_NEW_POST_TEXT,
} from './types';

const initialState: ProfilePageStateType = {
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
  ],
  newPostText: 'it-kamasutra.com',
};

export const profileReducer = (
  state = initialState,
  action: ProfilePageActionTypes,
): ProfilePageStateType => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.payload;
      return state;

    case ADD_POST:
      const post: PostType = {
        id: randomId(),
        message: state.newPostText,
        likesCount: 0,
      };

      state.posts.push(post);
      state.newPostText = '';
      return state;

    default:
      return state;
  }
};

export const changePostAC = (payload: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, payload } as const);

export const addPostAC = () => ({ type: ADD_POST } as const);

type ProfilePageActionTypes =
  | ReturnType<typeof changePostAC>
  | ReturnType<typeof addPostAC>;
