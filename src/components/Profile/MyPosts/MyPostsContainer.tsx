import { connect } from 'react-redux';
import { addPost, changePost } from '../../../redux/actions';
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

export const MyPostsContainer = connect<
  StatePropsType,
  DispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { addPost, changePost })(MyPosts);
