import { randomId } from '../utils/randomId';
import { DialogItemType, MessageType } from '../types/types';
import { ACTIONS_TYPE, DialogsPageActionTypes } from './actions';

const initialState = {
  dialogs: [
    {
      id: randomId(),
      name: 'Andrei',
    },
    {
      id: randomId(),
      name: 'John Doe',
    },
    {
      id: randomId(),
      name: 'Patrick',
    },
    {
      id: randomId(),
      name: 'Someone',
    },
  ] as Array<DialogItemType>,
  messages: [
    {
      id: randomId(),
      message: 'Hi',
    },
    {
      id: randomId(),
      message: 'Hi, dude!',
    },
    {
      id: randomId(),
      message: 'Yo',
    },
  ] as Array<MessageType>,
  newMessageText: '',
};

export type DialogsPageType = typeof initialState;

export const dialogsReducer = (
  state = initialState,
  action: DialogsPageActionTypes,
): DialogsPageType => {
  switch (action.type) {
    case ACTIONS_TYPE.UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.payload };

    case ACTIONS_TYPE.SEND_MESSAGE:
      const message: MessageType = {
        id: randomId(),
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, message],
        newMessageText: '',
      };

    default:
      return state;
  }
};
