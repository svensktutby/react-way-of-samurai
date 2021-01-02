import { connect } from 'react-redux';
import { addPostAC, changePostAC } from '../../../redux/profileReducer';
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

const mapDispatchToProps: DispatchPropsType = {
  addPost: addPostAC,
  changePost: changePostAC,
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
