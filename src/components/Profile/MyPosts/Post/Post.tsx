import React, { FC } from 'react';
import s from './Post.module.css';
import { PostType } from '../../../../redux/types';

export const Post: FC<PostType> = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.bsut.by/images/profiler/avatar1347_bc253802613d256d2dea1442ac5661ee.png"
        width="50"
        height="50"
        alt="Avatar"
      />
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  );
};
