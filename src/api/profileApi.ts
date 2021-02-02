import { API, ApiResponseType } from './api';
import { ProfileType } from '../types/types';

export const profileApi = {
  getProfile(userId: number): Promise<ProfileType> {
    return API.get<ProfileType>(`profile/${userId}`).then((res) => res.data);
  },
  getStatus(userId: number): Promise<string> {
    return API.get<string>(`profile/status/${userId}`).then((res) => res.data);
  },
  updateStatus(status: string): Promise<ApiResponseType> {
    return API.put<ApiResponseType>(`profile/status/`, { status }).then(
      (res) => res.data,
    );
  },
};
