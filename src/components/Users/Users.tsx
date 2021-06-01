import React, { useEffect } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring';

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

type QueryParamsType = {
  page?: string;
  term?: string;
  friend?: string;
};

export const Users: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useTypedSelector(getUsers);
  const totalUsersCount = useTypedSelector(getTotalUsersCount);
  const currentPage = useTypedSelector(getCurrentPage);
  const pageSize = useTypedSelector(getPageSize);
  const filter = useTypedSelector(getUsersFilter);
  const followingInProgress = useTypedSelector(getFollowingInProgress);

  useEffect(() => {
    const parsed: QueryParamsType = queryString.parse(
      history.location.search.slice(1),
    );

    let actualPage = currentPage;
    let actualFilter = filter;

    if (parsed.page) actualPage = Number(parsed.page);

    if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term };

    switch (parsed.friend) {
      case 'null':
        actualFilter = { ...actualFilter, friend: null };
        break;
      case 'true':
        actualFilter = { ...actualFilter, friend: true };
        break;
      case 'false':
        actualFilter = { ...actualFilter, friend: false };
        break;
      default:
        break;
    }

    dispatch(fetchUsers(actualPage, pageSize, actualFilter));
  }, [dispatch, currentPage, pageSize, filter, history.location.search]);

  useEffect(() => {
    const query: QueryParamsType = {};

    if (filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);

    history.push({
      pathname: '/users',
      search: queryString.stringify(query),
    });
  }, [currentPage, filter, history]);

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
