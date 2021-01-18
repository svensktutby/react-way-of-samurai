import { combineReducers, createStore } from 'redux';
import { enhancedStore } from './middleware';
import { sidebarReducer as sidebar } from './sidebarReducer';
import { dialogsReducer as dialogsPage } from './dialogsReducer';
import { profileReducer as profilePage } from './profileReducer';
import { usersReducer as usersPage } from './usersReducer';
import { authReducer as auth } from './authReducer';

export type AppStateType = ReturnType<typeof rootReducer>;

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
