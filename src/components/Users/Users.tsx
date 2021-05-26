import React, { useEffect } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';

import s from './Users.module.css';
import styleBtn from '../common/styles/button.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import type { FilterType } from '../../types/types';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User/User';
import { UsersSearchForm } from './UsersSearchForm';
import { fetchUsers, followUser, unfollowUser } from '../../redux/usersReducer';
import {
  getUsers,
  getTotalUsersCount,
  getCurrentPage,
  getPageSize,
  getUsersFilter,
  getFollowingInProgress,
} from '../../redux/usersSelectors';

export const Users: FC = () => {
  const dispatch = useDispatch();

  const users = useTypedSelector(getUsers);
  const totalUsersCount = useTypedSelector(getTotalUsersCount);
  const currentPage = useTypedSelector(getCurrentPage);
  const pageSize = useTypedSelector(getPageSize);
  const filter = useTypedSelector(getUsersFilter);
  const followingInProgress = useTypedSelector(getFollowingInProgress);

  useEffect(() => {
    dispatch(fetchUsers(currentPage, pageSize, filter));
  }, [dispatch, currentPage, pageSize, filter]);

  const changePageHandler = (page: number) => {
    dispatch(fetchUsers(page, pageSize, filter));
  };

  const changeFilterHandler = (value: FilterType) => {
    const page = 1;
    dispatch(fetchUsers(page, pageSize, value));
  };

  const follow = (userId: number) => {
    dispatch(followUser(userId));
  };
  const unfollow = (userId: number) => {
    dispatch(unfollowUser(userId));
  };

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
      <UsersSearchForm changeFilterHandler={changeFilterHandler} />

      <ul className={s.list}>{userElements}</ul>
      <button className={styleBtn.btn} type="button" onClick={() => {}}>
        Show more
      </button>

      <Paginator
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        currentPage={currentPage}
        changePageHandler={changePageHandler}
      />
    </div>
  );
};
