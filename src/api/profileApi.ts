import { API, ApiResponseType } from './api';
import { PhotosType, ProfileType } from '../types/types';

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
  savePhoto(photo: File): Promise<ApiResponseType<PhotosType>> {
    const formData = new FormData();
    formData.append('image', photo);

    return API.put<ApiResponseType<PhotosType>>(`profile/photo/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((res) => res.data);
  },
  saveProfile(profile: ProfileType): Promise<ApiResponseType> {
    return API.put<ApiResponseType>(`profile/`, profile).then(
      (res) => res.data,
    );
  },
};
