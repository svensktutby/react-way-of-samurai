import * as app from './appReducer';

describe('auth reducer', () => {
  let state: app.AppInitialStateType;

  beforeEach(() => {
    state = {
      initialized: false,
    };
  });

  it('should handle initializedSuccess', () => {
    // 1. data

    // 2. action
    const action = app.actions.initializedSuccess();

    const newState = app.appReducer(state, action);

    // 3. expectation
    expect(newState.initialized).toBeTruthy();
  });
});
