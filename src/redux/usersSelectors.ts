import { createSelector } from 'reselect';

import { AppStateType } from './reduxStore';
import { FilterType, UserType } from '../types/types';

const getUsersSelector = (state: AppStateType): Array<UserType> =>
  state.usersPage.users;

export const getUsers = createSelector(
  getUsersSelector,
  (users): Array<UserType> => users.filter((u) => !!u),
);

export const getPageSize = (state: AppStateType): number =>
  state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppStateType): number =>
  state.usersPage.totalUsersCount;

export const getCurrentPage = (state: AppStateType): number =>
  state.usersPage.currentPage;

export const getIsFetching = (state: AppStateType): boolean =>
  state.usersPage.isFetching;

export const getFollowingInProgress = (state: AppStateType): Array<number> =>
  state.usersPage.followingInProgress;

export const getUsersFilter = (state: AppStateType): FilterType =>
  state.usersPage.filter;
