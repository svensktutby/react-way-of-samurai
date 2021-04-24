import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import { AppStateType } from '../../redux/reduxStore';
import { logout } from '../../redux/authReducer';

export type StatePropsType = {
  login: string | null;
  isAuth: boolean;
};

export type DispatchPropsType = {
  logout: () => void;
};

export type PropsType = StatePropsType & DispatchPropsType;

const HeaderAPIContainer: FC<PropsType> = (props) => {
  const { login, logout: logoutCallback, isAuth } = props;

  return <Header login={login} logout={logoutCallback} isAuth={isAuth} />;
};

const mapStateToProps = ({
  auth: { login, isAuth },
}: AppStateType): StatePropsType => {
  return { login, isAuth };
};

export const HeaderContainer = connect<
  StatePropsType,
  DispatchPropsType,
  Record<string, never>,
  AppStateType
>(mapStateToProps, { logout })(HeaderAPIContainer);
