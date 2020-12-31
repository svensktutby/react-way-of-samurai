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

export type UserType = {
  id: string;
  followed: boolean;
  fullName: string;
  photoUrl: string;
  status: string;
  location: {
    country: string;
    city: string;
  };
};
