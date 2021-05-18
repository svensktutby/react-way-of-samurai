import { randomId } from '../utils/randomId';
import type {
  DialogItemType,
  InferActionsType,
  MessageType,
} from '../types/types';

export enum ActionType {
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
};

export const dialogsReducer = (
  state = initialState,
  action: DialogsPageActionsType,
): DialogsPageStateType => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE: {
      const message: MessageType = {
        id: randomId(),
        message: action.payload,
      };

      return {
        ...state,
        messages: [...state.messages, message],
      };
    }

    default:
      return state;
  }
};

/** Actions */
export const actions = {
  sendMessage: (message: string) =>
    ({ type: ActionType.SEND_MESSAGE, payload: message } as const),
};

/** Types */
export type DialogsPageStateType = typeof initialState;

export type DialogsPageActionsType = InferActionsType<typeof actions>;
