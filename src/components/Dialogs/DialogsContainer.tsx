import React, { FC } from 'react';
import { changeMessageAC, sendMessageAC } from '../../redux/dialogsReducer';
import { StoreType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';

type DialogsContainerPropsType = {
  store: StoreType;
};

export const DialogsContainer: FC<DialogsContainerPropsType> = ({
  store: { getState, dispatch },
}) => {
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
};
