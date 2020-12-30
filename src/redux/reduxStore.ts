import { combineReducers, createStore } from 'redux';
import { sidebarReducer as sidebar } from './sidebarReducer';
import { dialogsReducer as dialogsPage } from './dialogsReducer';
import { profileReducer as profilePage } from './profileReducer';

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const rootReducer = combineReducers({
  profilePage,
  dialogsPage,
  sidebar,
});

export const store = createStore(rootReducer);

// FIXME remove global __store__
// @ts-ignore
window.__store__ = store;
