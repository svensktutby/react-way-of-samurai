import { ActionsType, PostType, ProfilePageType, randomId } from './state';
import { ADD_POST, UPDATE_NEW_POST_TEXT } from './types';

type ProfileReducerType = (
  state: ProfilePageType,
  action: ActionsType,
) => ProfilePageType;

export const profileReducer: ProfileReducerType = (state, action) => {
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

export const changePostAC = (text: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, payload: text } as const);

export const addPostAC = () => ({ type: ADD_POST } as const);
