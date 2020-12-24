import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { store } from './redux/reduxStore';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Provider } from './StoreContext';

const App: FC = () => {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />

      <main className="appWrapperContent">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </main>
    </div>
  );
};

const SamuraiJSApp: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

export default SamuraiJSApp;
