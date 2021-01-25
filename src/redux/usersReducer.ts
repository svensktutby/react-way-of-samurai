import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { usersApi } from '../api/usersApi';
import { UserType } from '../types/types';

export enum ActionsType {
  FOLLOW = 'SN/USERS/FOLLOW',
  UNFOLLOW = 'SN/USERS/UNFOLLOW',
  SET_USERS = 'SN/USERS/SET_USERS',
  SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE',
  SET_USERS_TOTAL_COUNT = 'SN/USERS/SET_USERS_TOTAL_COUNT',
  TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
}

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};

export type UsersPageStateType = typeof initialState;

export const usersReducer = (
  state = initialState,
  action: UsersPageActionsType,
): UsersPageStateType => {
  switch (action.type) {
    case ActionsType.FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: true } : u,
        ),
      };
    }

    case ActionsType.UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: false } : u,
        ),
      };
    }

    case ActionsType.SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case ActionsType.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case ActionsType.SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    }

    case ActionsType.TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }

    case ActionsType.TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId,
            ),
      };
    }

    default:
      return state;
  }
};

export const follow = (userId: number) =>
  ({ type: ActionsType.FOLLOW, payload: userId } as const);

export const unfollow = (userId: number) =>
  ({ type: ActionsType.UNFOLLOW, payload: userId } as const);

export const setUsers = (users: Array<UserType>) =>
  ({ type: ActionsType.SET_USERS, payload: users } as const);

export const setCurrentPage = (page: number) =>
  ({ type: ActionsType.SET_CURRENT_PAGE, payload: page } as const);

export const setUsersTotalCount = (totalCount: number) =>
  ({ type: ActionsType.SET_USERS_TOTAL_COUNT, payload: totalCount } as const);

export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: ActionsType.TOGGLE_IS_FETCHING, payload: isFetching } as const);

export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
  ({
    type: ActionsType.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {
      isFetching,
      userId,
    },
  } as const);

export type UsersPageActionsType =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>;

type ThunkType<
  A extends Action = UsersPageActionsType,
  R = Promise<void>,
  S = UsersPageStateType
> = ThunkAction<R, S, unknown, A>;

export const getUsers = (page: number, pageSize: number): ThunkType => async (
  dispatch,
) => {
  dispatch(toggleIsFetching(true));

  const data = await usersApi.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersTotalCount(data.totalCount));
};

export const followUser = (userId: number): ThunkType => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  const data = await usersApi.follow(userId);
  if (data.resultCode === 0) {
    dispatch(follow(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollowUser = (userId: number): ThunkType => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  const data = await usersApi.unfollow(userId);
  if (data.resultCode === 0) {
    dispatch(unfollow(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
