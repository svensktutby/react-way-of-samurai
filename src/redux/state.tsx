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

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

export type StoreType = {
  _state: RootStateType;
  _onChange: () => void;
  getState: () => RootStateType;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
  subscribe: (cb: () => void) => void;
};

const randomId = () => (Math.random() * 1e8).toString(16);

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
  getState() {
    return this._state;
  },
  _onChange() {
    console.log('State changed');
  },
  addPost() {
    const newPost: PostType = {
      id: randomId(),
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._onChange();
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._onChange();
  },
  subscribe(cb) {
    this._onChange = cb;
  },
};

export default store;

///////////
declare global {
  interface Window {
    store: StoreType;
  }
}
window.store = store;
