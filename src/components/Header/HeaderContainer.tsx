import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { DispatchPropsType, Header, PropsType, StatePropsType } from './Header';
import { AppStateType } from '../../redux/reduxStore';
import { setAuthUserData } from '../../redux/actions';
import { AuthType } from '../../types/types';

export type AuthResponseType = {
  resultCode: 0 | 1;
  messages: Array<string>;
  data: AuthType | null;
};

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';

class HeaderAPIContainer extends Component<PropsType> {
  componentDidMount() {
    axios({
      method: 'GET',
      url: `${BASE_URL}/auth/me`,
      withCredentials: true,
    }).then((res: AxiosResponse<AuthResponseType>) => {
      if (res.data.resultCode === 0 && res.data.data) {
        this.props.setAuthUserData(res.data.data);
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
