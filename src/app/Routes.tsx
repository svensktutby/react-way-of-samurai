import React, { lazy } from 'react';
import type { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { UsersContainer } from '../components/Users/UsersContainer';
import { LoginPage } from '../components/Login/Login';
import { Error404 } from '../components/common/Error404/Error404';

export const PATH = {
  PROFILE: '/profile',
  DIALOGS: '/dialogs',
  USERS: '/users',

  LOGIN: '/login',
  ERROR_404: '/404',
};

const DialogsContainer = lazy(async () => {
  const module = await import('../components/Dialogs/DialogsContainer');
  return { default: module.DialogsContainer };
});
const ProfileContainer = lazy(async () => {
  const module = await import('../components/Profile/ProfileContainer');
  return { default: module.ProfileContainer };
});

export const Routes: FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={PATH.PROFILE} />} />

        <Route
          path={`${PATH.PROFILE}/:userId?`}
          render={() => <ProfileContainer />}
        />
        <Route path={PATH.DIALOGS} render={() => <DialogsContainer />} />
        <Route path={PATH.USERS} render={() => <UsersContainer />} />
        <Route path={PATH.LOGIN} render={() => <LoginPage />} />
        <Route path={PATH.ERROR_404} render={() => <Error404 />} />

        <Redirect from="*" to={PATH.ERROR_404} />
      </Switch>
    </>
  );
};
