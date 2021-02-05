import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';

import { enhancedStore } from './middleware';
import { dialogsReducer as dialogsPage } from './dialogsReducer';
import { profileReducer as profilePage } from './profileReducer';
import { usersReducer as usersPage } from './usersReducer';
import { authReducer as auth } from './authReducer';
import { sidebarReducer as sidebar } from './sidebarReducer';

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  profilePage,
  dialogsPage,
  sidebar,
  usersPage,
  auth,
  form,
});

export const store = createStore(rootReducer, enhancedStore);

// FIXME remove global __store__
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore next line
window.store = store;
