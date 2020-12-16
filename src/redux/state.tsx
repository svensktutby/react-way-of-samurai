const randomId = () => (Math.random() * 1e8).toString(16);

export type DialogItemType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
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
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof changePostAC>;

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostAC = () => ({ type: ADD_POST } as const);

export const changePostAC = (text: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, payload: text } as const);

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
          id: 1,
          name: 'Andrei',
        },
        {
          id: 2,
          name: 'John Doe',
        },
        {
          id: 3,
          name: 'Patrick',
        },
        {
          id: 4,
          name: 'Someone',
        },
      ],
      messages: [
        {
          id: 1,
          message: 'Hi',
        },
        {
          id: 2,
          message: 'Hi, dude!',
        },
        {
          id: 3,
          message: 'Yo',
        },
      ],
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
      case 'ADD_POST':
        const newPost: PostType = {
          id: randomId(),
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
        return;

      case 'UPDATE_NEW_POST_TEXT':
        this._state.profilePage.newPostText = action.payload;
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
