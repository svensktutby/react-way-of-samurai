import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './User.module.css';
import userAvatar from '../../../assets/images/userAvatar.svg';
import styleBtn from '../../common/styles/button.module.css';
import { UserType } from '../../../types/types';

type UsersPropsType = {
  user: UserType;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

export const User: FC<UsersPropsType> = ({
  user,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <li className={s.item}>
      <div>
        <div className={s.avatarWrapper}>
          <Link to={`/profile/${user.id}`}>
            <img
              className={s.avatar}
              src={user.photos.small ? user.photos.small : userAvatar}
              width="50"
              height="50"
              alt="User avatar"
            />
          </Link>
        </div>
        <div>
          {user.followed ? (
            <button
              className={styleBtn.btn}
              type="button"
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={styleBtn.btn}
              type="button"
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.info}>
        <div>
          <div className={s.name}>{user.name}</div>
          <div className={s.status}>{user.status || 'Status is empty'}</div>
        </div>
        <div className={s.location}>
          <div>user.location.country</div>
          <div>user.location.city</div>
        </div>
      </div>
    </li>
  );
};
