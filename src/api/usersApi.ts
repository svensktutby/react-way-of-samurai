import { API, ApiResponseType, ItemsResponseType } from './api';
import { UserType } from '../types/types';

export const usersApi = {
  getUsers(page = 1, pageSize = 5): Promise<ItemsResponseType<UserType>> {
    return API.get<ItemsResponseType<UserType>>(
      `users?page=${page}&count=${pageSize}`,
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
