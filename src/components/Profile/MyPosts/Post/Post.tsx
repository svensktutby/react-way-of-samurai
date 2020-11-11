import React from 'react';
import classes from './Post.module.css';

export const Post: React.FC = () => {
  const { item } = classes;

  return (
    <div className={item}>
      <img
        src="https://www.bsut.by/images/profiler/avatar1347_bc253802613d256d2dea1442ac5661ee.png"
        alt="Avatar"
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
