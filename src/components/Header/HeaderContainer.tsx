import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import { AppStateType } from '../../redux/reduxStore';
import { getAuthUserData } from '../../redux/authReducer';

export type StatePropsType = {
  login: string | null;
  isAuth: boolean;
};

export type DispatchPropsType = {
  getAuthUserData: () => void;
};

export type PropsType = StatePropsType & DispatchPropsType;

class HeaderAPIContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render(): JSX.Element {
    const { login, isAuth } = this.props;

    return <Header login={login} isAuth={isAuth} />;
  }
}

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
>(mapStateToProps, { getAuthUserData })(HeaderAPIContainer);
