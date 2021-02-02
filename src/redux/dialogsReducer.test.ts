import * as dialogs from './dialogsReducer';

describe('Dialogs page', () => {
  let state: dialogs.DialogsPageStateType;

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

  it('should handle sendMessage', () => {
    // 1. data

    // 2. action
    const action = dialogs.sendMessage();

    const newState = dialogs.dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages).toHaveLength(4);
    expect(newState.messages[3].message).toBe('I wish you happy holidays');
  });

  it('should handle changeMessage', () => {
    const action = dialogs.changeMessage('new text');

    const newState = dialogs.dialogsReducer(state, action);

    expect(newState.newMessageText).toBe('new text');
  });
});
