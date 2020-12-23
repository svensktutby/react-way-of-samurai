import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { store, StoreType } from './redux/redux-store';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

type AppPropsType = {
  store: StoreType;
};

const App: FC<AppPropsType> = ({ store }) => {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />

      <main className="appWrapperContent">
        <Route path="/profile" render={() => <Profile store={store} />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={store} />}
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
