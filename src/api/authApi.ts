import { API, ApiResponseType } from './api';

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseDataType = {
  userId: number;
};

export type LoginDataType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: null | string;
};

export const authApi = {
  me(): Promise<ApiResponseType<MeResponseDataType>> {
    return API.get<ApiResponseType<MeResponseDataType>>(`auth/me`).then(
      (res) => res.data,
    );
  },
  login({
    email,
    password,
    rememberMe = false,
  }: LoginDataType): Promise<ApiResponseType<LoginResponseDataType>> {
    return API.post<ApiResponseType<LoginResponseDataType>>(`auth/login`, {
      email,
      password,
      rememberMe,
    }).then((res) => res.data);
  },
  logout(): Promise<ApiResponseType> {
    return API.delete<ApiResponseType>(`auth/login`).then((res) => res.data);
  },
};
