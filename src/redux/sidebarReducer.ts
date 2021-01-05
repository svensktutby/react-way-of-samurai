const initialState = {};

export type SidebarType = typeof initialState;

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
