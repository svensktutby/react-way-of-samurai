import React, { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/reduxStore';
import {
  actions as usersActions,
  followUser,
  fetchUsers,
  unfollowUser,
} from '../../redux/usersReducer';
import { FilterType, UserType } from '../../types/types';
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
  filter: FilterType;
};

type DispatchPropsType = {
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
  setCurrentPage: (page: number) => void;
  fetchUsers: (page: number, pageSize: number, filter: FilterType) => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class UsersAPIContainer extends Component<PropsType> {
  componentDidMount() {
    const { page, pageSize, filter, fetchUsers: getUsers } = this.props;
    getUsers(page, pageSize, filter);
  }

  changePageHandler = (page: number) => {
    const { pageSize, filter, fetchUsers: getUsers } = this.props;
    getUsers(page, pageSize, filter);
  };

  changeFilterHandler = (filter: FilterType) => {
    const page = 1;
    const { pageSize, fetchUsers: getUsers } = this.props;
    getUsers(page, pageSize, filter);
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
        {isFetching && <Preloader text="Loading..." />}

        <Users
          users={users}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          page={page}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
          changePageHandler={this.changePageHandler}
          changeFilterHandler={this.changeFilterHandler}
        />
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
    filter: usersSelectors.getUsersFilter(state),
  };
};

export const UsersContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    fetchUsers,
  }),
)(UsersAPIContainer);
