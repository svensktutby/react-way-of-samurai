import { AppStateType } from './reduxStore';
import { UserType } from '../types/types';

export const getUsers = (state: AppStateType): Array<UserType> =>
  state.usersPage.users;

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
