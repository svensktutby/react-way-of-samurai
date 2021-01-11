import { DialogsPageType, dialogsReducer } from './dialogsReducer';
import { changeMessage, sendMessage } from './actions';

describe('Dialogs page', () => {
  let state: DialogsPageType;

  beforeEach(() => {
    state = {
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
  });

  test("messages' length should be incremented", function () {
    // 1. data
    const action = sendMessage();

    // 2. action
    const newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages).toHaveLength(4);
  });

  test('new post message should be correct', function () {
    // 1. data
    const action = sendMessage();

    // 2. action
    const newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages[3].message).toEqual('I wish you happy holidays');
  });

  test("changed post' message should be correct", function () {
    // 1. data
    const action = changeMessage('new text');

    // 2. action
    const newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.newMessageText).toEqual('new text');
  });
});
