import React, { FC } from 'react';
import axios, { AxiosResponse } from 'axios';
import s from './Users.module.css';
import { UserType } from '../../types/types';
import userAvatar from '../../assets/images/userAvatar.svg';

export type StatePropsType = {
  users: Array<UserType>;
};

export type DispatchPropsType = {
  follow: (payload: number) => void;
  unfollow: (payload: number) => void;
  setUsers: (payload: Array<UserType>) => void;
};

type GetUsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export const Users: FC<StatePropsType & DispatchPropsType> = ({
  users,
  follow,
  unfollow,
  setUsers,
}) => {
  const getUsers = () => {
    const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

    if (!users.length) {
      axios({
        method: 'GET',
        url: `${baseUrl}/users?count=4`,
      }).then((res: AxiosResponse<GetUsersResponseType>) => {
        setUsers(res.data.items);
      });
    }
  };

  const userElements = users.map((u) => (
    <li className={s.item} key={u.id}>
      <div>
        <div className={s.avatarWrapper}>
          <img
            className={s.avatar}
            src={u.photos.small ? u.photos.small : userAvatar}
            width="50"
            height="50"
            alt="User avatar"
          />
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

  return (
    <div>
      <ul className={s.list}>{userElements}</ul>
      <button className={s.moreBtn} type="button" onClick={() => getUsers()}>
        Show more
      </button>
    </div>
  );
};
