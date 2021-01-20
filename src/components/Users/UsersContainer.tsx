import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/reduxStore';
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow,
} from '../../redux/actions';
import { UserType } from '../../types/types';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { UsersResponseType } from '../../api/api';
import { usersApi } from '../../api/usersApi';

type StatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

type DispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setUsersTotalCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class UsersAPIContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data: UsersResponseType) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersApi
      .getUsers(pageNumber, this.props.pageSize)
      .then((data: UsersResponseType) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    const {
      users,
      pageSize,
      totalUsersCount,
      currentPage,
      followingInProgress,
      follow: followCallback,
      unfollow: unfollowCallback,
      isFetching,
      toggleFollowingProgress: toggleFollowingProgressCallback,
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
            follow={followCallback}
            unfollow={unfollowCallback}
            toggleFollowingProgress={toggleFollowingProgressCallback}
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersAPIContainer);
