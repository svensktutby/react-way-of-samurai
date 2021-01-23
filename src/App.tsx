import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './redux/reduxStore';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './components/Login/Login';

const App: FC = () => {
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <Navbar />

      <main className="appWrapperContent">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <LoginPage />} />
      </main>
    </div>
  );
};

export const SamuraiJSApp: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};
