import { combineReducers, compose, createStore } from 'redux';
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

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

// FIXME remove global __store__
// @ts-ignore
window.__store__ = store;
