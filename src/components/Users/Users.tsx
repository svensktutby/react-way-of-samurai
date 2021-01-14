import React, { FC } from 'react';
import s from './Users.module.css';
import userAvatar from '../../assets/images/userAvatar.svg';
import { randomId } from '../../utils/randomId';
import { UserType } from '../../types/types';
import { NavLink } from 'react-router-dom';

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
          <NavLink to={`/profile/${u.id}`}>
            <img
              className={s.avatar}
              src={u.photos.small ? u.photos.small : userAvatar}
              width="50"
              height="50"
              alt="User avatar"
            />
          </NavLink>
        </div>
        <div>
          {u.followed ? (
            <button
              className={s.followBtn}
              type="button"
              onClick={() => follow(u.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={s.followBtn}
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
          <div>{'u.location.country'},</div>
          <div>{'u.location.city'}</div>
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
            className={`${s.pageBtn} ${
              idx + 1 === currentPage && s.selectedPage
            }`}
            onClick={() => changePageHandler(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <ul className={s.list}>{userElements}</ul>
      <button className={s.moreBtn} type="button" onClick={() => {}}>
        Show more
      </button>
    </div>
  );
};
