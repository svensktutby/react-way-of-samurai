import { connect } from 'react-redux';

import { actions as profileActions } from '../../../redux/profileReducer';
import { DispatchPropsType, MyPosts, StatePropsType } from './MyPosts';
import { AppStateType } from '../../../redux/reduxStore';

const { addPost } = profileActions;

const mapStateToProps = ({
  profilePage: { posts },
}: AppStateType): StatePropsType => {
  return {
    posts,
  };
};

export const MyPostsContainer = connect<
  StatePropsType,
  DispatchPropsType,
  Record<string, never>,
  AppStateType
>(mapStateToProps, { addPost })(MyPosts);
