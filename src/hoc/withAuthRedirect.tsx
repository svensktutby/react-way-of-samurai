import React, { ComponentType, FC } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, ConnectedComponent } from 'react-redux';
import { AppStateType } from '../redux/reduxStore';

type StatePropsType = {
  isAuth: boolean;
};

const mapStateToPropsForRedirect = ({ auth: { isAuth } }: AppStateType) =>
  ({
    isAuth,
  } as StatePropsType);

export function withAuthRedirect<WCP>(
  WrappedComponent: ComponentType<WCP>,
): ConnectedComponent<FC<StatePropsType>, never> {
  const RedirectComponent: FC<StatePropsType> = ({ isAuth, ...restProps }) => {
    if (!isAuth) return <Redirect to="/login" />;
    return <WrappedComponent {...(restProps as WCP)} />;
  };

  return connect<
    StatePropsType,
    Record<string, never>,
    Record<string, never>,
    AppStateType
  >(
    mapStateToPropsForRedirect,
    {},
  )(RedirectComponent);
}
