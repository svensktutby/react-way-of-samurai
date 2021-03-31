import React, { FC } from 'react';

import s from './Users.module.css';
import styleBtn from '../common/styles/button.module.css';
import { UserType } from '../../types/types';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User/User';

type UsersPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  page: number;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  changePageHandler: (page: number) => void;
};

export const Users: FC<UsersPropsType> = (props) => {
  const {
    users,
    pageSize,
    totalUsersCount,
    page,
    followingInProgress,
    follow,
    unfollow,
    changePageHandler,
  } = props;

  const userElements = users.map((user) => (
    <User
      key={user.id}
      user={user}
      followingInProgress={followingInProgress}
      follow={follow}
      unfollow={unfollow}
    />
  ));

  return (
    <div className={s.usersBlock}>
      <Paginator
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        currentPage={page}
        changePageHandler={changePageHandler}
      />

      <ul className={s.list}>{userElements}</ul>
      <button className={styleBtn.btn} type="button" onClick={() => {}}>
        Show more
      </button>
    </div>
  );
};
