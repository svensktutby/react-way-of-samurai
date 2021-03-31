export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type DialogItemType = {
  id: string;
  name: string;
};

export type MessageType = {
  id: string;
  message: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type UserType = {
  id: number;
  name: string;
  photos: PhotosType;
  status: string;
  followed: boolean;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
  aboutMe: string;
};

export type InferActionsType<T> = T extends Record<
  string,
  (...args: never[]) => infer U
>
  ? U
  : never;
