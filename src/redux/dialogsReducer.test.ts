import * as actions from './actions';
import { DialogsPageType, dialogsReducer } from './dialogsReducer';
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

  test('should handle sendMessage', () => {
    // 1. data

    // 2. action
    const action = actions.sendMessage();

    const newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages).toHaveLength(4);
    expect(newState.messages[3].message).toBe('I wish you happy holidays');
  });

  test('should handle changeMessage', () => {
    const action = actions.changeMessage('new text');

    const newState = dialogsReducer(state, action);

    expect(newState.newMessageText).toBe('new text');
  });
});
