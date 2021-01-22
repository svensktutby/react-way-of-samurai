import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Profile } from './Profile';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';
import { getProfile } from '../../redux/actions';

type PathPropsType = {
  userId: string;
};

type RouterPropsType = RouteComponentProps<PathPropsType>;

type StatePropsType = {
  profile: ProfileType | null;
};

type DispatchPropsType = {
  getProfile: (userId: number) => void;
};

type PropsType = StatePropsType & DispatchPropsType & RouterPropsType;

class ProfileAPIContainer extends Component<PropsType> {
  componentDidMount() {
    const userId = Number(this.props.match.params.userId) || 13640;

    this.props.getProfile(userId);
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
>(mapStateToProps, { getProfile })(WithURLDataProfileAPIContainer);
