import { API, ApiResponseType, UsersResponseType } from './api';

export const usersApi = {
  getUsers(page = 1, pageSize = 5): Promise<UsersResponseType> {
    return API.get<UsersResponseType>(
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
