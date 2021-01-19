import React, { FC } from 'react';

import s from './Post.module.css';
import userAvatar from '../../../../assets/images/userAvatar.svg';
import { PostType } from '../../../../types/types';

export const Post: FC<PostType> = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img src={userAvatar} width="50" height="50" alt="Avatar" />
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  );
};
