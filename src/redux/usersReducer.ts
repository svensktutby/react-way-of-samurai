import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { usersApi } from '../api/usersApi';
import { FilterType, InferActionsType, UserType } from '../types/types';
import { ResultCode } from '../api/api';

export enum ActionType {
  FOLLOW = 'SN/USERS/FOLLOW',
  UNFOLLOW = 'SN/USERS/UNFOLLOW',
  SET_USERS = 'SN/USERS/SET_USERS',
  SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE',
  SET_FILTER = 'SN/USERS/SET_FILTER',
  SET_USERS_TOTAL_COUNT = 'SN/USERS/SET_USERS_TOTAL_COUNT',
  TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
}

export const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
  filter: {
    term: '',
    friend: null,
  } as FilterType,
};

export const usersReducer = (
  state = initialState,
  action: UsersPageActionsType,
): UsersPageStateType => {
  switch (action.type) {
    case ActionType.FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: true } : u,
        ),
      };

    case ActionType.UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: false } : u,
        ),
      };

    case ActionType.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ActionType.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case ActionType.SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };

    case ActionType.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case ActionType.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId,
            ),
      };

    default:
      return state;
  }
};

/** Actions */
export const actions = {
  follow: (userId: number) =>
    ({ type: ActionType.FOLLOW, payload: userId } as const),

  unfollow: (userId: number) =>
    ({ type: ActionType.UNFOLLOW, payload: userId } as const),

  setUsers: (users: Array<UserType>) =>
    ({ type: ActionType.SET_USERS, payload: users } as const),

  setCurrentPage: (page: number) =>
    ({ type: ActionType.SET_CURRENT_PAGE, payload: page } as const),

  setFilter: (filter: FilterType) =>
    ({ type: ActionType.SET_FILTER, payload: filter } as const),

  setUsersTotalCount: (totalCount: number) =>
    ({ type: ActionType.SET_USERS_TOTAL_COUNT, payload: totalCount } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({ type: ActionType.TOGGLE_IS_FETCHING, payload: isFetching } as const),

  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: ActionType.TOGGLE_IS_FOLLOWING_PROGRESS,
      payload: {
        isFetching,
        userId,
      },
    } as const),
};

/** Thunks */
export const fetchUsers = (
  page: number,
  pageSize: number,
  filter: FilterType,
): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFetching(true));
  dispatch(actions.setCurrentPage(page));
  dispatch(actions.setFilter(filter));

  const data = await usersApi.getUsers(page, pageSize, filter);

  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(data.items));
  dispatch(actions.setUsersTotalCount(data.totalCount));
};

export const followUser = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingProgress(true, userId));

  const data = await usersApi.follow(userId);

  if (data.resultCode === ResultCode.Success) {
    dispatch(actions.follow(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const unfollowUser = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingProgress(true, userId));

  const data = await usersApi.unfollow(userId);

  if (data.resultCode === ResultCode.Success) {
    dispatch(actions.unfollow(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

/** Types */
export type UsersPageStateType = typeof initialState;

export type UsersPageActionsType = InferActionsType<typeof actions>;

type ThunkType<
  A extends Action = UsersPageActionsType,
  R = Promise<void>,
  S = { usersPage: UsersPageStateType }
> = ThunkAction<R, S, unknown, A>;
