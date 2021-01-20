import axios from 'axios';
import { UserType } from '../types/types';

export type AuthType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type UsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export type ApiResponseType = {
  resultCode: 0 | 1;
  messages: Array<string>;
  data: AuthType | null;
};

export const API = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});
