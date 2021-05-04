import { API, ApiResponseType, ItemsResponseType } from './api';
import { UserType, FilterType } from '../types/types';

export const usersApi = {
  getUsers(
    page = 1,
    pageSize = 5,
    filter: FilterType = { term: '', friend: null },
  ): Promise<ItemsResponseType<UserType>> {
    const friend = filter.friend === null ? '' : filter.friend;

    return API.get<ItemsResponseType<UserType>>(
      `users?page=${page}&count=${pageSize}&term=${filter.term}&friend=${friend}`,
    ).then((res) => res.data);
  },

  follow(userId: number): Promise<ApiResponseType> {
    return API.post<ApiResponseType>(`follow/${userId}`).then(
      (res) => res.data,
    );
  },

  unfollow(userId: number): Promise<ApiResponseType> {
    return API.delete<ApiResponseType>(`follow/${userId}`).then(
      (res) => res.data,
    );
  },
};
