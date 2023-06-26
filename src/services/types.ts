export interface IUser {
  id: number | string;
  username: string;
}

export interface IMessage {
  id: number | string;
  body: string;
  postId: string;
  user: IUser;
}

export interface IGetMessagesResponse {
  comments: IMessage[];
}
