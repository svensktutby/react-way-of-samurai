export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const ADD_POST = 'ADD_POST';

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type DialogItemType = {
  id: string;
  name: string;
};

export type MessageType = {
  id: string;
  message: string;
};

export type ProfilePageStateType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type DialogsPageType = {
  dialogs: Array<DialogItemType>;
  messages: Array<MessageType>;
  newMessageText: string;
};

export type SidebarType = {};
