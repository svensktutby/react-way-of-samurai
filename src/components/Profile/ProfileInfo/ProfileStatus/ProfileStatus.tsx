import React, { Component } from 'react';

import styleInput from '../../../common/styles/Input.module.css';
import s from './ProfileStatus.module.css';

type StatePropsType = {
  status: string;
};

type DispatchPropsType = Record<string, string>;

type PropsType = StatePropsType & DispatchPropsType;

export class ProfileStatus extends Component<PropsType> {
  state = {
    editMode: false,
  };

  activateEditMode = (): void => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = (): void => {
    this.setState({
      editMode: false,
    });
  };

  render(): JSX.Element {
    const { status } = this.props;

    return (
      <>
        {!this.state.editMode ? (
          <div className={s.statusWrapper}>
            <span className={s.status} onDoubleClick={this.activateEditMode}>
              {status}
            </span>
          </div>
        ) : (
          <div className={`${styleInput.inputWrapper} ${s.editStatusWrapper}`}>
            <input
              className={`${styleInput.input} ${s.editStatus}`}
              value={status}
              onBlur={this.deactivateEditMode}
              onChange={() => {}}
              autoFocus
            />
          </div>
        )}
      </>
    );
  }
}
