import React, { FC, Component, ComponentType } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';

import s from './App.module.css';
import { AppStateType, store } from './redux/reduxStore';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';

type StatePropsType = {
  initialized: boolean;
};

type DispatchPropsType = {
  initializeApp: () => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class App extends Component<PropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <div className={s.preloaderAppWrapper}>
          <Preloader text="Loading SamuraiJSApp" />
        </div>
      );
    }

    return (
      <div className={s.appWrapper}>
        <HeaderContainer />
        <Navbar />

        <main className={s.appWrapperContent}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({
  app: { initialized },
}: AppStateType): StatePropsType => {
  return {
    initialized,
  };
};

const AppContainer = compose<ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App);

export const SamuraiJSApp: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  );
};
