import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  addPostAC,
  changePostAC,
  ProfilePageActionTypes,
} from '../../../redux/profileReducer';
import { DispatchPropsType, MyPosts, StatePropsType } from './MyPosts';
import { AppStateType } from '../../../redux/reduxStore';

const mapStateToProps = ({
  profilePage: { newPostText, posts },
}: AppStateType): StatePropsType => {
  return {
    newPostText,
    posts,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ProfilePageActionTypes>,
): DispatchPropsType => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    changePost: (payload: string) => {
      dispatch(changePostAC(payload));
    },
  };
};

export const MyPostsContainer = connect<
  StatePropsType,
  DispatchPropsType,
  {},
  AppStateType
>(
  mapStateToProps,
  mapDispatchToProps,
)(MyPosts);
