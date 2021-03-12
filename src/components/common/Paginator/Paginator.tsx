import React, { FC } from 'react';

import s from './Paginator.module.css';
import styleBtn from '../styles/Button.module.css';
import { randomId } from '../../../utils/randomId';

type PaginatorPropsType = {
  pageSize: number;
  totalItemsCount: number;
  currentPage: number;
  changePageHandler: (page: number) => void;
};

export const Paginator: FC<PaginatorPropsType> = ({
  pageSize,
  totalItemsCount,
  currentPage,
  changePageHandler,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = Array(Math.min(10, pagesCount)).fill(null);

  return (
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
  );
};
