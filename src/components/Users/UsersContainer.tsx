import React, { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/reduxStore';
import {
  actions as usersActions,
  followUser,
  requestUsers,
  unfollowUser,
} from '../../redux/usersReducer';
import { UserType } from '../../types/types';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import * as usersSelectors from '../../redux/usersSelectors';

const { setCurrentPage } = usersActions;

type StatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  page: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

type DispatchPropsType = {
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
  setCurrentPage: (page: number) => void;
  requestUsers: (page: number, pageSize: number) => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class UsersAPIContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.page, this.props.pageSize);
  }

  changePageHandler = (page: number) => {
    this.props.requestUsers(page, this.props.pageSize);
  };

  render(): JSX.Element {
    const {
      users,
      pageSize,
      totalUsersCount,
      page,
      followingInProgress,
      followUser: follow,
      unfollowUser: unfollow,
      isFetching,
    } = this.props;

    return (
      <>
        {isFetching ? (
          <Preloader text="Loading..." />
        ) : (
          <Users
            users={users}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            page={page}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            changePageHandler={this.changePageHandler}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): StatePropsType => {
  return {
    users: usersSelectors.getUsers(state),
    pageSize: usersSelectors.getPageSize(state),
    totalUsersCount: usersSelectors.getTotalUsersCount(state),
    page: usersSelectors.getCurrentPage(state),
    isFetching: usersSelectors.getIsFetching(state),
    followingInProgress: usersSelectors.getFollowingInProgress(state),
  };
};

export const UsersContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    requestUsers,
  }),
)(UsersAPIContainer);
