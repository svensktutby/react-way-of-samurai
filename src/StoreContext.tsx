import * as React from 'react';
import { StoreType } from './redux/reduxStore';
import { FC } from 'react';

export const StoreContext = React.createContext({} as StoreType);

export type ProviderType = {
  store: StoreType;
  children: React.ReactNode;
};

export const Provider: FC<ProviderType> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
