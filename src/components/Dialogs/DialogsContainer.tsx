import { connect } from 'react-redux';
import { changeMessageAC, sendMessageAC } from '../../redux/dialogsReducer';
import { Dialogs, DispatchPropsType, StatePropsType } from './Dialogs';
import { AppStateType } from '../../redux/reduxStore';

const mapStateToProps = ({ dialogsPage }: AppStateType): StatePropsType => {
  return {
    dialogsPage,
  };
};

const mapDispatchToProps: DispatchPropsType = {
  sendMessage: sendMessageAC,
  changeMessage: changeMessageAC,
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
