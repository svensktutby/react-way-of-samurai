import React, { FC } from 'react';
import { addPostAC, changePostAC } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/reduxStore';

const mapStateToProps = ({
  profilePage: { newPostText, posts },
}: AppStateType) => {
  return {
    newPostText,
    posts,
  };
};

// FIXME give dispatch Type
const mapDispatchToProps = (dispatch: any) => {
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
