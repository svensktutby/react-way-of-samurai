import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import { Header } from './Header';
import { AuthType } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';
import { setAuthUserData } from '../../redux/actions';

type StatePropsType = {
  login: string | null;
  isAuth: boolean;
};

type DispatchPropsType = {
  setAuthUserData: (data: AuthType) => void;
};

type AxiosResponseType = {
  resultCode: 0 | 1;
  messages: Array<string>;
  data: AuthType | null;
};

export type PropsType = StatePropsType & DispatchPropsType;

class HeaderAPIContainer extends Component<PropsType> {
  componentDidMount() {
    const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

    axios({
      method: 'GET',
      url: `${baseUrl}/auth/me`,
      withCredentials: true,
    }).then((res: AxiosResponse<AxiosResponseType>) => {
      res.data.resultCode === 0 &&
        res.data.data &&
        this.props.setAuthUserData(res.data.data);
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
  {},
  AppStateType
>(mapStateToProps, { setAuthUserData })(HeaderAPIContainer);
