import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Dialogs } from './components/Dialogs';
import { News } from './components/News';
import { Music } from './components/Music';
import { Settings } from './components/Settings';
import { AppStateType, StoreType, store } from './redux/redux-store';

type AppPropsType = {
  store: StoreType;
};

const App: FC<AppPropsType> = ({ store }) => {
  const { profilePage, dialogsPage }: AppStateType = store.getState();
  const { dispatch } = store;

  return (
    <div className="appWrapper">
      <Header />
      <Navbar />

      <main className="appWrapperContent">
        <Route
          path="/profile"
          render={() => (
            <Profile profilePage={profilePage} dispatch={dispatch} />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs dialogsPage={dialogsPage} dispatch={dispatch} />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </main>
    </div>
  );
};

const SamuraiJSApp: FC = () => {
  return (
    <Router>
      <App store={store} />
    </Router>
  );
};

export default SamuraiJSApp;
