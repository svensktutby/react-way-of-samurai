import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Profile } from './Profile';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';
import { getProfile } from '../../redux/actions';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

// FIXME change any
const WithURLDataProfileAPIContainer: any = withRouter(ProfileAPIContainer);

const AuthRedirectComponent = withAuthRedirect<PropsType>(
  WithURLDataProfileAPIContainer,
);

export const ProfileContainer = connect<
  StatePropsType,
  DispatchPropsType,
  Record<string, never>,
  AppStateType
>(mapStateToProps, { getProfile })(AuthRedirectComponent);
