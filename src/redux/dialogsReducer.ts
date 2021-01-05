import { randomId } from '../utils/randomId';
import { DialogItemType, MessageType } from '../types/types';

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
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.payload };

    case SEND_MESSAGE:
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

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const changeMessageAC = (payload: string) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, payload } as const);

const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const);

export type DialogsPageActionTypes =
  | ReturnType<typeof changeMessageAC>
  | ReturnType<typeof sendMessageAC>;
