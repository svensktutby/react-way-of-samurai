import React, { FC } from 'react';

import s from './Post.module.css';
import userAvatar from '../../../../assets/images/userAvatar.svg';
import { PostType } from '../../../../types/types';

export const Post: FC<PostType> = ({ message, likesCount }) => {
  return (
    <div className={s.post}>
      <img
        className={s.avatar}
        src={userAvatar}
        width="50"
        height="50"
        alt="Avatar"
      />
      <div>
        <div className={s.message}>
          <span className={s.text}>{message}</span>
        </div>
        <div className={s.like}>
          <button type="button" className={s.heart}>
            &#9825;
          </button>
          <span>&nbsp;{likesCount}</span>
          <span>&nbsp;{likesCount === 1 ? 'like' : 'likes'}</span>
        </div>
      </div>
    </div>
  );
};
