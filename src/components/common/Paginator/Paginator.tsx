import React, { FC } from 'react';

import s from './Paginator.module.css';

type PaginatorPropsType = {
  pageSize: number;
  totalItemsCount: number;
  currentPage?: number;
  changePageHandler: (page: number) => void;
  portionSize?: number;
};

export const Paginator: FC<PaginatorPropsType> = ({
  pageSize,
  totalItemsCount,
  currentPage = 1,
  changePageHandler,
  portionSize = 10,
}) => {
  const portionCount = Math.ceil(totalItemsCount / pageSize);

  const startIndex = Math.floor((currentPage - 1) / portionSize) * portionSize;

  const pages = Array(portionSize)
    .fill(null)
    .reduce((acc, item, idx) => {
      const current = idx + 1 + startIndex;

      if (current <= portionCount) {
        return [...acc, current];
      }

      return acc;
    }, []);

  return (
    <div className={s.paginator}>
      <button
        type="button"
        className={`${s.btn}`}
        disabled={currentPage === 1}
        onClick={() => changePageHandler(1)}
      >
        First
      </button>
      <button
        type="button"
        className={`${s.btn}`}
        disabled={currentPage === 1}
        onClick={() => changePageHandler(currentPage - 1)}
      >
        Previous
      </button>
      {pages.map((p: number) => {
        const isCurrent = p === currentPage;

        return (
          <button
            type="button"
            key={p}
            className={`${s.btn} ${isCurrent && s.selected}`}
            disabled={isCurrent}
            onClick={() => changePageHandler(p)}
          >
            {p}
          </button>
        );
      })}
      <button
        type="button"
        className={`${s.btn}`}
        disabled={currentPage === portionCount}
        onClick={() => changePageHandler(currentPage + 1)}
      >
        Next
      </button>
      <button
        type="button"
        className={`${s.btn}`}
        disabled={currentPage === portionCount}
        onClick={() => changePageHandler(portionCount)}
      >
        Last
      </button>
    </div>
  );
};
