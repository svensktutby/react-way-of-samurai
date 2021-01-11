import { connect } from 'react-redux';

import { DispatchPropsType, StatePropsType, Users } from './Users';
import { AppStateType } from '../../redux/reduxStore';
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  unfollow,
} from '../../redux/actions';

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
})(Users);
