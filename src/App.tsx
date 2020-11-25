import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Dialogs } from './components/Dialogs';
import { News } from './components/News';
import { Music } from './components/Music';
import { Settings } from './components/Settings';
import { RootStateType } from './redux/state';

type PropsType = {
  state: RootStateType;
};

const App: FC<PropsType> = ({ state: { profilePage, dialogsPage } }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <main className="app-wrapper__content">
        <Route path="/profile" render={() => <Profile state={profilePage} />} />
        <Route path="/dialogs" render={() => <Dialogs state={dialogsPage} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </main>
    </div>
  );
};

export default App;
