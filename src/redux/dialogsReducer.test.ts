import { dialogsReducer, sendMessageAC } from './dialogsReducer';
import { DialogsPageType } from './types';

describe('Dialogs page', () => {
  const state: DialogsPageType = {
    dialogs: [
      {
        id: '1',
        name: 'Andrei',
      },
      {
        id: '2',
        name: 'John Doe',
      },
      {
        id: '3',
        name: 'Patrick',
      },
      {
        id: '4',
        name: 'Someone',
      },
    ],
    messages: [
      {
        id: '1',
        message: 'Hi',
      },
      {
        id: '2',
        message: 'Hi, dude!',
      },
      {
        id: '3',
        message: 'Yo',
      },
    ],
    newMessageText: 'I wish you happy holidays',
  };

  it("messages' length should be incremented", function () {
    // 1. data
    const action = sendMessageAC();

    // 2. action
    const newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages.length).toBe(4);
    expect(newState.messages.length).not.toBe(3);
  });

  it('new post message should be correct', function () {
    // 1. data
    const action = sendMessageAC();

    // 2. action
    const newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages[3].message).toBe('I wish you happy holidays');
  });
});
