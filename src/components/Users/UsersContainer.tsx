import { connect } from 'react-redux';

import { DispatchPropsType, StatePropsType, Users } from './Users';
import { AppStateType } from '../../redux/reduxStore';
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from '../../redux/usersReducer';

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

const mapDispatchToProps: DispatchPropsType = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setUsersTotalCount: setUsersTotalCountAC,
};

export const UsersContainer = connect<
  StatePropsType,
  DispatchPropsType,
  {},
  AppStateType
>(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
