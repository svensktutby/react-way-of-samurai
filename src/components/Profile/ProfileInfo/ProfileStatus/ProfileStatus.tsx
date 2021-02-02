import React, { ChangeEvent, Component } from 'react';

import styleInput from '../../../common/styles/Input.module.css';
import s from './ProfileStatus.module.css';

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

type StateType = {
  status: string;
  editMode: boolean;
};

export class ProfileStatus extends Component<PropsType, StateType> {
  state = {
    status: this.props.status,
    editMode: false,
  };

  componentDidUpdate(prevProps: Readonly<PropsType>): void {
    this.updateStatusIfNeeded(prevProps.status);
  }

  activateEditMode = (): void => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = (): void => {
    this.setState({
      editMode: false,
    });

    this.props.updateStatus(this.state.status);
  };

  statusChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  updateStatusIfNeeded(lastStatus: string): void {
    if (lastStatus !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render(): JSX.Element {
    return (
      <>
        {!this.state.editMode ? (
          <div className={s.statusWrapper}>
            <span className={s.status} onDoubleClick={this.activateEditMode}>
              {this.props.status || 'No status'}
            </span>
          </div>
        ) : (
          <div className={`${styleInput.inputWrapper} ${s.editStatusWrapper}`}>
            <input
              className={`${styleInput.input} ${s.editStatus}`}
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              onChange={this.statusChangeHandler}
              autoFocus
            />
          </div>
        )}
      </>
    );
  }
}
