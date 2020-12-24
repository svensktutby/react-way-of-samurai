import React, { FC } from 'react';
import { changeMessageAC, sendMessageAC } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { StoreContext } from '../../StoreContext';

export const DialogsContainer: FC = () => {
  return (
    <StoreContext.Consumer>
      {({ getState, dispatch }) => {
        const { dialogsPage } = getState();

        const sendMessageCallback = () => {
          dispatch(sendMessageAC());
        };

        const changeMessageCallback = (payload: string) => {
          dispatch(changeMessageAC(payload));
        };

        return (
          <Dialogs
            dialogsPage={dialogsPage}
            sendMessage={sendMessageCallback}
            changeMessage={changeMessageCallback}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
