import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  changeMessageAC,
  DialogsPageActionTypes,
  sendMessageAC,
} from '../../redux/dialogsReducer';
import { Dialogs, DispatchPropsType, StatePropsType } from './Dialogs';
import { AppStateType } from '../../redux/reduxStore';

const mapStateToProps = ({ dialogsPage }: AppStateType): StatePropsType => {
  return {
    dialogsPage,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<DialogsPageActionTypes>,
): DispatchPropsType => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    changeMessage: (payload: string) => {
      dispatch(changeMessageAC(payload));
    },
  };
};

export const DialogsContainer = connect<
  StatePropsType,
  DispatchPropsType,
  {},
  AppStateType
>(
  mapStateToProps,
  mapDispatchToProps,
)(Dialogs);
