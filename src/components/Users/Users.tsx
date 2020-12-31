import React, { FC } from 'react';
import s from './Users.module.css';
import { UserType } from '../../types/types';
import { randomId } from '../../utils/randomId';

export type StatePropsType = {
  users: Array<UserType>;
};

export type DispatchPropsType = {
  follow: (payload: string) => void;
  unfollow: (payload: string) => void;
  setUsers: (payload: Array<UserType>) => void;
};

const usersMock = [
  {
    id: randomId(),
    followed: false,
    fullName: 'Andrei S.',
    photoUrl:
      'https://www.bsut.by/images/profiler/avatar1347_bc253802613d256d2dea1442ac5661ee.png',
    status: 'I am looking for a Job right now',
    location: {
      country: 'Belarus',
      city: 'Minsk',
    },
  },
  {
    id: randomId(),
    followed: false,
    fullName: 'John D.',
    photoUrl:
      'https://www.bsut.by/images/profiler/avatar1347_bc253802613d256d2dea1442ac5661ee.png',
    status: 'I have nothing to say',
    location: {
      country: 'Canada',
      city: 'Vancouver',
    },
  },
  {
    id: randomId(),
    followed: true,
    fullName: 'Kate Z.',
    status: 'Pretty girl',
    photoUrl:
      'https://www.bsut.by/images/profiler/avatar1347_bc253802613d256d2dea1442ac5661ee.png',
    location: {
      country: 'Poland',
      city: 'Poznan',
    },
  },
];

export const Users: FC<StatePropsType & DispatchPropsType> = ({
  users,
  follow,
  unfollow,
  setUsers,
}) => {
  if (!users.length) setUsers(usersMock);

  const userElements = users.map((u) => (
    <li className={s.item} key={u.id}>
      <div>
        <div className={s.avatarWrapper}>
          <img
            className={s.avatar}
            src={u.photoUrl}
            width="50"
            height="50"
            alt="Avatar"
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
          <div className={s.name}>{u.fullName}</div>
          <div className={s.status}>{u.status}</div>
        </div>
        <div className={s.location}>
          <div>{u.location.country},</div>
          <div>{u.location.city}</div>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <ul className={s.list}>{userElements}</ul>
      <button
        className={s.moreBtn}
        type="button"
        onClick={() => setUsers(usersMock)}
      >
        Show more
      </button>
    </div>
  );
};
