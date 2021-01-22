import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/reduxStore';
import {
  followUser,
  getUsers,
  setCurrentPage,
  unfollowUser,
} from '../../redux/actions';
import { UserType } from '../../types/types';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';

type StatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

type DispatchPropsType = {
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class UsersAPIContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    const {
      users,
      pageSize,
      totalUsersCount,
      currentPage,
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
            currentPage={currentPage}
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
    currentPage,
    isFetching,
    followingInProgress,
  };
};

export const UsersContainer = connect<
  StatePropsType,
  DispatchPropsType,
  Record<string, never>,
  AppStateType
>(mapStateToProps, {
  followUser,
  unfollowUser,
  setCurrentPage,
  getUsers,
})(UsersAPIContainer);
