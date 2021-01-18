import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './Users.module.css';
import userAvatar from '../../assets/images/userAvatar.svg';
import { randomId } from '../../utils/randomId';
import { UserType } from '../../types/types';
import styleBtn from '../common/styles/Button.module.css';

type UsersPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  changePageHandler: (pageNumber: number) => void;
};

export const Users: FC<UsersPropsType> = (props) => {
  const {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    follow,
    unfollow,
    changePageHandler,
  } = props;

  const userElements = users.map((u) => (
    <li className={s.item} key={u.id}>
      <div>
        <div className={s.avatarWrapper}>
          <Link to={`/profile/${u.id}`}>
            <img
              className={s.avatar}
              src={u.photos.small ? u.photos.small : userAvatar}
              width="50"
              height="50"
              alt="User avatar"
            />
          </Link>
        </div>
        <div>
          {u.followed ? (
            <button
              className={styleBtn.btn}
              type="button"
              onClick={() => follow(u.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={styleBtn.btn}
              type="button"
              onClick={() => unfollow(u.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.info}>
        <div>
          <div className={s.name}>{u.name}</div>
          <div className={s.status}>{u.status}</div>
        </div>
        <div className={s.location}>
          <div>u.location.country</div>
          <div>u.location.city</div>
        </div>
      </div>
    </li>
  ));

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = Array(Math.min(10, pagesCount)).fill(null);

  return (
    <div className={s.usersBlock}>
      <div>
        {pages.map((p, idx) => (
          <button
            type="button"
            key={randomId()}
            className={`${s.pageBtn} ${styleBtn.btn} ${
              idx + 1 === currentPage && s.selectedPage
            }`}
            onClick={() => changePageHandler(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <ul className={s.list}>{userElements}</ul>
      <button className={styleBtn.btn} type="button" onClick={() => {}}>
        Show more
      </button>
    </div>
  );
};
