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

const App: FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <main className="app-wrapper__content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </Router>
  );
};

export default App;
