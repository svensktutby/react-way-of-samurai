import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogItemPropsType = {
  id: number;
  name: string;
};

export type MessagePropsType = {
  id: number;
  message: string;
};

export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type DataPropsType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>;
  posts: Array<PostPropsType>;
};

const data: DataPropsType = {
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
};

const app = <App data={data} />;

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
