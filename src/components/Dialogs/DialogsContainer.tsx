import { connect } from 'react-redux';

import { Dialogs, DispatchPropsType, StatePropsType } from './Dialogs';
import { AppStateType } from '../../redux/reduxStore';
import { changeMessage, sendMessage } from '../../redux/actions';

const mapStateToProps = ({ dialogsPage }: AppStateType): StatePropsType => {
  return {
    dialogsPage,
  };
};

export const DialogsContainer = connect<
  StatePropsType,
  DispatchPropsType,
  Record<string, never>,
  AppStateType
>(mapStateToProps, { sendMessage, changeMessage })(Dialogs);
