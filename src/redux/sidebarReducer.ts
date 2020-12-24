import { SidebarType } from './types';

const initialState: SidebarType = {};

export const sidebarReducer = (
  state = initialState,
  action: SidebarActionTypes,
): SidebarType => {
  switch (action.type) {
    default:
      return state;
  }
};

type SidebarActionTypes = { type: 'TYPE' };
