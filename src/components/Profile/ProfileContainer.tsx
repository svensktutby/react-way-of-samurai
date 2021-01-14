import React, { Component } from 'react';
import { Profile } from './Profile';
import axios, { AxiosResponse } from 'axios';
import { ProfileType } from '../../types/types';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { setUserProfile } from '../../redux/actions';

type StatePropsType = {
  profile: ProfileType | null;
};

type DispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class ProfileAPIContainer extends Component<PropsType> {
  componentDidMount() {
    const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

    axios({
      method: 'GET',
      url: `${baseUrl}/profile/2`,
    }).then((res: AxiosResponse<ProfileType>) => {
      this.props.setUserProfile(res.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = ({
  profilePage: { profile },
}: AppStateType): StatePropsType => {
  return {
    profile,
  };
};

export const ProfileContainer = connect<
  StatePropsType,
  DispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { setUserProfile })(ProfileAPIContainer);
