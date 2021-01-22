import { Action, combineReducers, createStore } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { enhancedStore } from './middleware';
import { dialogsReducer as dialogsPage } from './dialogsReducer';
import { profileReducer as profilePage } from './profileReducer';
import { usersReducer as usersPage } from './usersReducer';
import { authReducer as auth } from './authReducer';
import { sidebarReducer as sidebar } from './sidebarReducer';

export type AppStateType = ReturnType<typeof rootReducer>;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<string>
>;

const rootReducer = combineReducers({
  profilePage,
  dialogsPage,
  sidebar,
  usersPage,
  auth,
});

export const store = createStore(rootReducer, enhancedStore);

// FIXME remove global __store__
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore next line
window.store = store;
