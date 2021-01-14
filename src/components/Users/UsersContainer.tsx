import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { AppStateType } from '../../redux/reduxStore';
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleIsFetching,
  unfollow,
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
};

type DispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setUsersTotalCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

type GetUsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

type PropsType = StatePropsType & DispatchPropsType;

class UsersAPIContainer extends Component<PropsType> {
  componentDidMount() {
    const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

    this.props.toggleIsFetching(true);

    axios({
      method: 'GET',
      url: `${baseUrl}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    }).then((res: AxiosResponse<GetUsersResponseType>) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

    axios({
      method: 'GET',
      url: `${baseUrl}/users?page=${pageNumber}&count=${this.props.pageSize}`,
    }).then((res: AxiosResponse<GetUsersResponseType>) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(res.data.items);
    });
  };

  render() {
    const {
      users,
      pageSize,
      totalUsersCount,
      currentPage,
      follow,
      unfollow,
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
  usersPage: { users, pageSize, totalUsersCount, currentPage, isFetching },
}: AppStateType): StatePropsType => {
  return {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching,
  };
};

export const UsersContainer = connect<
  StatePropsType,
  DispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
})(UsersAPIContainer);
