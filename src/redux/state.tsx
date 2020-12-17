const randomId = () => Math.floor(Math.random() * 1e9).toString(16);

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

type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

type DialogsPageType = {
  dialogs: Array<DialogItemType>;
  messages: Array<MessageType>;
  newMessageText: string;
};

type SidebarType = {};

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

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const changePostAC = (text: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, payload: text } as const);

export const addPostAC = () => ({ type: ADD_POST } as const);

export const changeMessageAC = (text: string) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, payload: text } as const);

export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const);

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
    switch (action.type) {
      case 'UPDATE_NEW_POST_TEXT':
        this._state.profilePage.newPostText = action.payload;
        this._callSubscriber();
        return;

      case 'ADD_POST':
        const post: PostType = {
          id: randomId(),
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };

        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
        return;

      case 'UPDATE_NEW_MESSAGE_TEXT':
        this._state.dialogsPage.newMessageText = action.payload;
        this._callSubscriber();
        return;

      case 'SEND_MESSAGE':
        const message: MessageType = {
          id: randomId(),
          message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messages.push(message);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
        return;

      default:
        return;
    }
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
