import { combineReducers, createStore } from 'redux';
import { enhancedStore } from './middleware';
import { sidebarReducer as sidebar } from './sidebarReducer';
import { dialogsReducer as dialogsPage } from './dialogsReducer';
import { profileReducer as profilePage } from './profileReducer';
import { usersReducer as usersPage } from './usersReducer';

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  profilePage,
  dialogsPage,
  sidebar,
  usersPage,
});

export const store = createStore(rootReducer, enhancedStore);

// FIXME remove global __store__
// @ts-ignore next line
window.__store__ = store;
