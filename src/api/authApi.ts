import { API, ResultCode, ResultCodeCaptcha } from './api';
import type { ApiResponseType } from './api';

export type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

export type LoginResponseDataType = {
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
    captcha = null,
  }: LoginDataType): Promise<
    ApiResponseType<LoginResponseDataType, ResultCode | ResultCodeCaptcha>
  > {
    return API.post<
      ApiResponseType<LoginResponseDataType, ResultCode | ResultCodeCaptcha>
    >(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    }).then((res) => res.data);
  },
  logout(): Promise<ApiResponseType> {
    return API.delete<ApiResponseType>(`auth/login`).then((res) => res.data);
  },
};
