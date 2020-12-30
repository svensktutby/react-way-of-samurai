import {
  DialogsPageType,
  dialogsReducer,
  sendMessageAC,
} from './dialogsReducer';

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
    expect(newState.messages).toHaveLength(4);
  });

  it('new post message should be correct', function () {
    // 1. data
    const action = sendMessageAC();

    // 2. action
    const newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages[3].message).toEqual('I wish you happy holidays');
  });
});
