import { API } from './api';
import { ProfileType } from '../types/types';

export const profileApi = {
  getProfile(userId: number): Promise<ProfileType> {
    return API.get<ProfileType>(`profile/${userId}`).then((res) => res.data);
  },
};
