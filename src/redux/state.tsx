export type DialogItemType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  message: string;
};

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

type ProfilePageType = {
  posts: Array<PostType>;
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

const state: RootStateType = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: 'Hi, dude!',
        likesCount: 18,
      },
      {
        id: 2,
        message: "It's not my first post",
        likesCount: 3,
      },
    ],
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
};

export default state;
