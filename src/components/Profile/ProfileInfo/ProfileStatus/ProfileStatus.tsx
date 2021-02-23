import React, { ChangeEvent, Component } from 'react';

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
    const defaultStatus = "What's on your mind?";

    return (
      <>
        {!this.state.editMode ? (
          <div className={s.statusWrapper}>
            <span
              className={s.status}
              onClick={this.activateEditMode}
              role="presentation"
            >
              {this.props.status || defaultStatus}
            </span>
          </div>
        ) : (
          <div className={`${s.editStatusWrapper}`}>
            <input
              className={`${s.editStatus}`}
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              onChange={this.statusChangeHandler}
              placeholder={defaultStatus}
              autoFocus
            />
          </div>
        )}
      </>
    );
  }
}
