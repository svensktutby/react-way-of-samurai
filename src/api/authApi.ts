import { API, ApiResponseType } from './api';

export const authApi = {
  me(): Promise<ApiResponseType> {
    return API.get<ApiResponseType>(`auth/me`).then((res) => res.data);
  },
};
