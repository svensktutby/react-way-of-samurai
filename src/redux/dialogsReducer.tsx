import { ActionsType, DialogsPageType, MessageType, randomId } from './state';
import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from './types';

type DialogsReducerType = (
  state: DialogsPageType,
  action: ActionsType,
) => DialogsPageType;

export const dialogsReducer: DialogsReducerType = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.payload;
      return state;

    case SEND_MESSAGE:
      const message: MessageType = {
        id: randomId(),
        message: state.newMessageText,
      };

      state.messages.push(message);
      state.newMessageText = '';
      return state;

    default:
      return state;
  }
};

export const changeMessageAC = (text: string) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, payload: text } as const);

export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const);
