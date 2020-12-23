export type SidebarType = {};

export type SidebarActionTypes = { type: 'TYPE' };

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
