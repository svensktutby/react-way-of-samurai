import { ActionsType, SidebarType } from './state';

type SidebarReducerType = (
  state: SidebarType,
  action: ActionsType,
) => SidebarType;

export const sidebarReducer: SidebarReducerType = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
