import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  changeMessageAC,
  DialogsPageActionTypes,
  DialogsPageType,
  sendMessageAC,
} from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { AppStateType } from '../../redux/reduxStore';

type MapStatePropsType = {
  dialogsPage: DialogsPageType;
};

type MapDispatchPropsType = {
  changeMessage: (payload: string) => void;
  sendMessage: () => void;
};

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = ({ dialogsPage }: AppStateType) => {
  return {
    dialogsPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DialogsPageActionTypes>) => {
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
