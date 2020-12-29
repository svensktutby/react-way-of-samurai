import { connect } from 'react-redux';
import { changeMessageAC, sendMessageAC } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { AppStateType } from '../../redux/reduxStore';

const mapStateToProps = ({ dialogsPage }: AppStateType) => {
  return {
    dialogsPage,
  };
};

// FIXME give dispatch Type
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    changeMessage: (payload: string) => {
      dispatch(changeMessageAC(payload));
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dialogs);
