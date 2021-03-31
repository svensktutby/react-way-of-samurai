import React, { FC, Component, ComponentType, lazy, Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';

import s from './App.module.css';
import { AppStateType, store } from './redux/reduxStore';
import { UsersContainer } from './components/Users/UsersContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';
import { Error404 } from './components/common/Error404/Error404';

const DialogsContainer = lazy(async () => {
  const module = await import('./components/Dialogs/DialogsContainer');
  return { default: module.DialogsContainer };
});
const ProfileContainer = lazy(async () => {
  const module = await import('./components/Profile/ProfileContainer');
  return { default: module.ProfileContainer };
});

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

        <div className={s.container}>
          <Navbar />

          <main className={s.appContent}>
            <Suspense
              fallback={
                <div className={s.preloaderPageWrapper}>
                  <Preloader text="Loading..." />
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/profile" />}
                />
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="/404" render={() => <Error404 />} />
                <Route path="*" render={() => <Redirect to="/404" />} />
              </Switch>
            </Suspense>
          </main>
        </div>
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
