export interface IUser {
  userID: string;
  username: string;
  yourself: boolean,
  isOffline: boolean,
  messages: IMessages[]
}

export interface IMessages {
  content: string,
  fromSelf: boolean,
}
