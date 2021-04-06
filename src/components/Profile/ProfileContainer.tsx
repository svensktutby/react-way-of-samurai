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
  savePhoto,
  updateStatus,
} from '../../redux/profileReducer';

type PathPropsType = {
  userId: string;
};

type RouterPropsType = RouteComponentProps<PathPropsType>;

type StatePropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: number | null;
};

type DispatchPropsType = {
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
};

type PropsType = StatePropsType & DispatchPropsType & RouterPropsType;

class ProfileAPIContainer extends Component<PropsType> {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  refreshProfile() {
    const userId =
      Number(this.props.match.params.userId) || this.props.authorizedUserId;

    if (!userId) {
      this.props.history.push('/login');
    } else {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  }

  render(): JSX.Element {
    const {
      profile,
      status,
      updateStatus: updateStatusCallback,
      savePhoto: savePhotoCallback,
      ...props
    } = this.props;

    return (
      <Profile
        {...props}
        isOwner={!this.props.match.params.userId}
        profile={profile}
        status={status}
        updateStatus={updateStatusCallback}
        savePhoto={savePhotoCallback}
      />
    );
  }
}

const mapStateToProps = ({
  profilePage: { profile, status },
  auth: { id },
}: AppStateType) => {
  return {
    profile,
    status,
    authorizedUserId: id,
  };
};

export const ProfileContainer = compose<ComponentType>(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
)(ProfileAPIContainer);
