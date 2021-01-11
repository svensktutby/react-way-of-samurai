import { UserType } from '../types/types';
import { ACTIONS_TYPE, UsersPageActionTypes } from './actions';

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
    case ACTIONS_TYPE.FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: false } : u,
        ),
      };
    }

    case ACTIONS_TYPE.UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: true } : u,
        ),
      };
    }

    case ACTIONS_TYPE.SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case ACTIONS_TYPE.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case ACTIONS_TYPE.SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    }

    default:
      return state;
  }
};
