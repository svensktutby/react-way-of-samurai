import React, { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Profile } from './Profile';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';
import {
  getProfile,
  getStatus,
  updateStatus,
} from '../../redux/profileReducer';

type PathPropsType = {
  userId: string;
};

type RouterPropsType = RouteComponentProps<PathPropsType>;

type StatePropsType = {
  profile: ProfileType | null;
  status: string;
};

type DispatchPropsType = {
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
};

type PropsType = StatePropsType & DispatchPropsType & RouterPropsType;

class ProfileAPIContainer extends Component<PropsType> {
  componentDidMount() {
    const userId = Number(this.props.match.params.userId) || 13640;

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render(): JSX.Element {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = ({
  profilePage: { profile, status },
}: AppStateType): StatePropsType => {
  return {
    profile,
    status,
  };
};

export const ProfileContainer = compose<ComponentType>(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
)(ProfileAPIContainer);
