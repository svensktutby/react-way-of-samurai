import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  addPostAC,
  changePostAC,
  ProfilePageActionTypes,
} from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { AppStateType } from '../../../redux/reduxStore';
import { PostType } from '../../../types/types';

type MapStatePropsType = {
  posts: Array<PostType>;
  newPostText: string;
};

type MapDispatchPropsType = {
  addPost: () => void;
  changePost: (payload: string) => void;
};

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = ({
  profilePage: { newPostText, posts },
}: AppStateType): MapStatePropsType => {
  return {
    newPostText,
    posts,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ProfilePageActionTypes>,
): MapDispatchPropsType => {
  return {
    addPost: () => dispatch(addPostAC()),
    changePost: (payload: string) => {
      dispatch(changePostAC(payload));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPosts);
