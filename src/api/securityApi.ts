import { API } from './api';

export type GetCaptchaUrlResponseType = {
  url: string;
};

export const securityApi = {
  getCaptchaUrl(): Promise<GetCaptchaUrlResponseType> {
    return API.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(
      (res) => res.data,
    );
  },
};
