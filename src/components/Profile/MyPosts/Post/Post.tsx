import React, { FC } from 'react';
import s from './Post.module.css';

type PostPropsType = {
  message: string;
  likesCount: number;
};

export const Post: FC<PostPropsType> = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.bsut.by/images/profiler/avatar1347_bc253802613d256d2dea1442ac5661ee.png"
        alt="Avatar"
      />
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  );
};
