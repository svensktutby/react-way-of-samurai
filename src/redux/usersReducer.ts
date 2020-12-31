import { UserType } from '../types/types';

const initialState = {
  users: [] as Array<UserType>,
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
        users: [...state.users, ...action.payload],
      };
    }

    default:
      return state;
  }
};

const FOLLOW = 'FOLLOW';
export const followAC = (payload: string) =>
  ({ type: FOLLOW, payload } as const);

const UNFOLLOW = 'UNFOLLOW';
export const unfollowAC = (payload: string) =>
  ({ type: UNFOLLOW, payload } as const);

const SET_USERS = 'SET_USERS';
export const setUsersAC = (payload: Array<UserType>) =>
  ({ type: SET_USERS, payload } as const);

export type UsersPageActionTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;
