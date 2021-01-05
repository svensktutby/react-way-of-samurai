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

export type UserType = {
  id: number;
  name: string;
  photos: PhotosType;
  status: string;
  followed: boolean;
};
