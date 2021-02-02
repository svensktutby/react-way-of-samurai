import { API, ApiResponseType } from './api';

export type AuthType = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export const authApi = {
  me(): Promise<ApiResponseType<AuthType>> {
    return API.get<ApiResponseType<AuthType>>(`auth/me`).then(
      (res) => res.data,
    );
  },
};
