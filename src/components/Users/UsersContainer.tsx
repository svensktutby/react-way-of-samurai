import { connect } from 'react-redux';

import { DispatchPropsType, StatePropsType, Users } from './Users';
import { AppStateType } from '../../redux/reduxStore';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';

const mapStateToProps = ({
  usersPage: { users },
}: AppStateType): StatePropsType => {
  return {
    users,
  };
};

const mapDispatchToProps: DispatchPropsType = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
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
