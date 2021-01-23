import { connect } from 'react-redux';

import { Dialogs, DispatchPropsType, StatePropsType } from './Dialogs';
import { AppStateType } from '../../redux/reduxStore';
import { changeMessage, sendMessage } from '../../redux/actions';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = ({ dialogsPage }: AppStateType): StatePropsType => {
  return {
    dialogsPage,
  };
};

const AuthRedirectComponent = withAuthRedirect<
  StatePropsType & DispatchPropsType
>(Dialogs);

export const DialogsContainer = connect<
  StatePropsType,
  DispatchPropsType,
  Record<string, never>,
  AppStateType
>(mapStateToProps, { sendMessage, changeMessage })(AuthRedirectComponent);
