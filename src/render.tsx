import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import { addPost, updateNewPostText, RootStateType } from './redux/state';

export const renderEntireTree = (state: RootStateType) => {
  const app = (
    <Router>
      <App
        state={state}
        addPostCallback={addPost}
        updateNewPostTextCallback={updateNewPostText}
      />
    </Router>
  );

  ReactDOM.render(app, document.getElementById('root'));
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
