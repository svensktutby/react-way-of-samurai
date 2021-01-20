import { UserType } from '../types/types';
import { ActionsType, UsersPageActionTypes } from './actions';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

export type UsersPageType = typeof initialState;

export const usersReducer = (
  state = initialState,
  action: UsersPageActionTypes,
): UsersPageType => {
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

    default:
      return state;
  }
};
