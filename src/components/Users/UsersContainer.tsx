import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { AppStateType } from '../../redux/reduxStore';
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  unfollow,
} from '../../redux/actions';
import { UserType } from '../../types/types';
import { Users } from './Users';

type StatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

type DispatchPropsType = {
  follow: (payload: number) => void;
  unfollow: (payload: number) => void;
  setUsers: (payload: Array<UserType>) => void;
  setCurrentPage: (payload: number) => void;
  setUsersTotalCount: (payload: number) => void;
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

    axios({
      method: 'GET',
      url: `${baseUrl}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    }).then((res: AxiosResponse<GetUsersResponseType>) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);

    const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

    axios({
      method: 'GET',
      url: `${baseUrl}/users?page=${pageNumber}&count=${this.props.pageSize}`,
    }).then((res: AxiosResponse<GetUsersResponseType>) => {
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
    } = this.props;

    return (
      <Users
        users={users}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        follow={follow}
        unfollow={unfollow}
        changePageHandler={this.changePageHandler}
      />
    );
  }
}

const mapStateToProps = ({
  usersPage: { users, pageSize, totalUsersCount, currentPage },
}: AppStateType): StatePropsType => {
  return {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
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
})(UsersAPIContainer);
