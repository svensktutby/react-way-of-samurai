import axios from 'axios';
import { UserType } from '../types/types';

export type UsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export enum ResultCode {
  Success = 0,
  Error = 1,
}

export enum ResultCodeCaptcha {
  Required = 10,
}

export type ApiResponseType<D = Record<string, unknown>, RC = ResultCode> = {
  resultCode: RC;
  messages: Array<string>;
  data: D;
};

export const API = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});
