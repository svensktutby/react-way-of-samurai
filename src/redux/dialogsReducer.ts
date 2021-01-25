import { randomId } from '../utils/randomId';
import { DialogItemType, MessageType } from '../types/types';

export enum ActionsType {
  UPDATE_NEW_MESSAGE_TEXT = 'SN/DIALOGS/UPDATE_NEW_MESSAGE_TEXT',
  SEND_MESSAGE = 'SN/DIALOGS/SEND_MESSAGE',
}

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

export type DialogsPageStateType = typeof initialState;

export const dialogsReducer = (
  state = initialState,
  action: DialogsPageActionsType,
): DialogsPageStateType => {
  switch (action.type) {
    case ActionsType.UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.payload };

    case ActionsType.SEND_MESSAGE: {
      const message: MessageType = {
        id: randomId(),
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, message],
        newMessageText: '',
      };
    }

    default:
      return state;
  }
};

export const changeMessage = (message: string) =>
  ({ type: ActionsType.UPDATE_NEW_MESSAGE_TEXT, payload: message } as const);

export const sendMessage = () => ({ type: ActionsType.SEND_MESSAGE } as const);

export type DialogsPageActionsType =
  | ReturnType<typeof changeMessage>
  | ReturnType<typeof sendMessage>;
