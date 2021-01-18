import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Profile } from './Profile';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';
import { setUserProfile } from '../../redux/actions';

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
  Record<string, never>,
  AppStateType
>(mapStateToProps, { setUserProfile })(WithURLDataProfileAPIContainer);
