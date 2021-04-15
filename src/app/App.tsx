import React, { Component, ComponentType, FC, Suspense } from 'react';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';

import s from './App.module.css';
import { AppStateType, store } from '../redux/reduxStore';
import { HeaderContainer } from '../components/Header/HeaderContainer';
import { Navbar } from '../components/Navbar/Navbar';
import { initializeApp } from '../redux/appReducer';
import { Preloader } from '../components/common/Preloader/Preloader';
import { Routes } from './Routes';

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
              <Routes />
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
