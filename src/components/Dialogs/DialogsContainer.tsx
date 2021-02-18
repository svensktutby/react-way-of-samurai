import { ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Dialogs, StatePropsType } from './Dialogs';
import { AppStateType } from '../../redux/reduxStore';
import { sendMessage } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = ({ dialogsPage }: AppStateType): StatePropsType => {
  return {
    dialogsPage,
  };
};

export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect,
)(Dialogs);
