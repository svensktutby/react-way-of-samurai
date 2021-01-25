import React, { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/reduxStore';
import {
  followUser,
  getUsers,
  setCurrentPage,
  unfollowUser,
} from '../../redux/usersReducer';
import { UserType } from '../../types/types';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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
  getUsers: (page: number, pageSize: number) => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class UsersAPIContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.page, this.props.pageSize);
  }

  changePageHandler = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
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

const mapStateToProps = ({
  usersPage: {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching,
    followingInProgress,
  },
}: AppStateType): StatePropsType => {
  return {
    users,
    pageSize,
    totalUsersCount,
    page: currentPage,
    isFetching,
    followingInProgress,
  };
};

export const UsersContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    getUsers,
  }),
  withAuthRedirect,
)(UsersAPIContainer);
