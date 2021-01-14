import React, { Component } from 'react';
import { Profile } from './Profile';
import axios, { AxiosResponse } from 'axios';
import { ProfileType } from '../../types/types';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { setUserProfile } from '../../redux/actions';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type PathPropsType = {
  userId: string;
};

type RouterPropsType = RouteComponentProps<PathPropsType>;

type StatePropsType = {
  profile: ProfileType | null;
};

type DispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
};

type PropsType = StatePropsType & DispatchPropsType & RouterPropsType;

class ProfileAPIContainer extends Component<PropsType> {
  componentDidMount() {
    const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
    const userId = this.props.match.params.userId || 13640;

    axios({
      method: 'GET',
      url: `${baseUrl}/profile/${userId}`,
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

const WithURLDataProfileAPIContainer = withRouter(ProfileAPIContainer);

export const ProfileContainer = connect<
  StatePropsType,
  DispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { setUserProfile })(WithURLDataProfileAPIContainer);
