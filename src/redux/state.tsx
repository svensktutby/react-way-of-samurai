import { addPostAC, changePostAC, profileReducer } from './profileReducer';
import {
  changeMessageAC,
  dialogsReducer,
  sendMessageAC,
} from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';

export const randomId = () => Math.floor(Math.random() * 1e9).toString(16);

export type DialogItemType = {
  id: string;
  name: string;
};

export type MessageType = {
  id: string;
  message: string;
};

export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type DialogsPageType = {
  dialogs: Array<DialogItemType>;
  messages: Array<MessageType>;
  newMessageText: string;
};

export type SidebarType = {};

type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

export type StoreType = {
  _state: RootStateType;
  _callSubscriber: () => void;
  getState: () => RootStateType;
  subscribe: (cb: () => void) => void;
  dispatch: (action: ActionsType) => void;
};

export type ActionsType =
  | ReturnType<typeof changePostAC>
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof changeMessageAC>
  | ReturnType<typeof sendMessageAC>;

const store: StoreType = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogs: [
        {
          id: randomId(),
          name: 'Andrei',
        },
        {
          id: randomId(),
          name: 'John Doe',
        },
        {
          id: randomId(),
          name: 'Patrick',
        },
        {
          id: randomId(),
          name: 'Someone',
        },
      ],
      messages: [
        {
          id: randomId(),
          message: 'Hi',
        },
        {
          id: randomId(),
          message: 'Hi, dude!',
        },
        {
          id: randomId(),
          message: 'Yo',
        },
      ],
      newMessageText: '',
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(cb) {
    this._callSubscriber = cb;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();
  },
};

export default store;

/* declare_global_store */
declare global {
  interface Window {
    store: StoreType;
  }
}
window.store = store;
