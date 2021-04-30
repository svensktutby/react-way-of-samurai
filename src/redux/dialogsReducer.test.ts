import deepFreeze from 'deep-freeze';

import * as dialogs from './dialogsReducer';

describe('dialogs reducer', () => {
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

    deepFreeze(state);
  });

  it('should handle sendMessage', () => {
    // 1. data
    const message = 'I wish you happy holidays';

    // 2. action
    const action = dialogs.actions.sendMessage(message);
    deepFreeze(action);

    const newState = dialogs.dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages).toHaveLength(4);
    expect(newState.messages[3].message).toBe('I wish you happy holidays');
  });
});
