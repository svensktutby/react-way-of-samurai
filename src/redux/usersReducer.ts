import { UserType } from '../types/types';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

export type UsersPageType = typeof initialState;

export const usersReducer = (
  state = initialState,
  action: UsersPageActionTypes,
): UsersPageType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: false } : u,
        ),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: true } : u,
        ),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    }

    default:
      return state;
  }
};

const FOLLOW = 'FOLLOW';
export const followAC = (payload: number) =>
  ({ type: FOLLOW, payload } as const);

const UNFOLLOW = 'UNFOLLOW';
export const unfollowAC = (payload: number) =>
  ({ type: UNFOLLOW, payload } as const);

const SET_USERS = 'SET_USERS';
export const setUsersAC = (payload: Array<UserType>) =>
  ({ type: SET_USERS, payload } as const);

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPageAC = (payload: number) =>
  ({ type: SET_CURRENT_PAGE, payload } as const);

const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
export const setUsersTotalCountAC = (payload: number) =>
  ({ type: SET_USERS_TOTAL_COUNT, payload } as const);

export type UsersPageActionTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setUsersTotalCountAC>;
