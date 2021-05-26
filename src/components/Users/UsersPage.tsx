import React from 'react';
import type { FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getIsFetching } from '../../redux/usersSelectors';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';

export const UsersPage: FC = () => {
  const isFetching = useTypedSelector(getIsFetching);

  return (
    <>
      {isFetching && <Preloader text="Loading..." />}

      <Users />
    </>
  );
};
