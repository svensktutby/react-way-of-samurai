import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Users, DispatchPropsType, StatePropsType } from './Users';
import { AppStateType } from '../../redux/reduxStore';
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UsersPageActionTypes,
} from '../../redux/usersReducer';
import { UserType } from '../../types/types';

const mapStateToProps = ({
  usersPage: { users },
}: AppStateType): StatePropsType => {
  return {
    users,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<UsersPageActionTypes>,
): DispatchPropsType => {
  return {
    follow: (payload: number) => {
      dispatch(followAC(payload));
    },
    unfollow: (payload: number) => {
      dispatch(unfollowAC(payload));
    },
    setUsers: (payload: Array<UserType>) => {
      dispatch(setUsersAC(payload));
    },
  };
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
