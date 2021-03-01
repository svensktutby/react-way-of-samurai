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
    };
  });

  it('should handle sendMessage', () => {
    // 1. data
    const message = 'I wish you happy holidays';

    // 2. action
    const action = dialogs.actions.sendMessage(message);

    const newState = dialogs.dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages).toHaveLength(4);
    expect(newState.messages[3].message).toBe('I wish you happy holidays');
  });
});
