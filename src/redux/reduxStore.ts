import { combineReducers, createStore } from 'redux';
import type { Action } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import { reducer as form } from 'redux-form';

import { enhancedStore } from './middleware';
import { dialogsReducer as dialogsPage } from './dialogsReducer';
import { profileReducer as profilePage } from './profileReducer';
import { usersReducer as usersPage } from './usersReducer';
import { authReducer as auth } from './authReducer';
import { appReducer as app } from './appReducer';
import { sidebarReducer as sidebar } from './sidebarReducer';

const rootReducer = combineReducers({
  profilePage,
  dialogsPage,
  sidebar,
  usersPage,
  auth,
  app,
  form,
});

export const store = createStore(rootReducer, enhancedStore);

export type AppStateType = ReturnType<typeof rootReducer>;

export type ThunkType<
  A extends Action = Action,
  R = Promise<void>,
  S = AppStateType
> = ThunkAction<R, S, unknown, A>;

// FIXME remove global __store__
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore next line
window.store = store;
