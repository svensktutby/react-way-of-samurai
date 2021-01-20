import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DispatchPropsType, Header, PropsType, StatePropsType } from './Header';
import { AppStateType } from '../../redux/reduxStore';
import { setAuthUserData } from '../../redux/actions';
import { ApiResponseType } from '../../api/api';
import { authApi } from '../../api/authApi';

class HeaderAPIContainer extends Component<PropsType> {
  componentDidMount() {
    authApi.me().then((data: ApiResponseType) => {
      if (data.resultCode === 0 && data.data) {
        this.props.setAuthUserData(data.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
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
>(mapStateToProps, { setAuthUserData })(HeaderAPIContainer);
