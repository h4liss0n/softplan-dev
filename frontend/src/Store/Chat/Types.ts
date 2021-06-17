

export enum ChatActionTypes {
  CHAT_MESSAGE = "chat@CHAT_MESSAGE",
  CHAT_CONNECTED = "chat@USER_CONNECTED",
  CHAT_PRIVATE_MESSAGE = "chat@PRIVATE_MESSAGE",
  PERSIST_REHYDRATE = "persist/REHYDRATE"

}


export interface IPrivateMessage {  
  content: string,
  from: string,
  yourself: boolean,
}

export interface IUser {
  userID: string;
  username: string;
  yourself: boolean,
  isOffline: boolean,
  haveMessage: boolean,
  messages: IMessages[]
}

export interface IMessages {
  content: string,
  fromSelf: boolean,
}



export interface IChatMessage {
  type: ChatActionTypes.CHAT_MESSAGE;
  payload: any;
}

export interface IChatUserConected {
  type: ChatActionTypes.CHAT_CONNECTED;
  payload: any;
}

export interface IChatPrivateMessage {
  type: ChatActionTypes.CHAT_PRIVATE_MESSAGE;
  payload: any;
}



export interface IPersistRehydrate {
  type: ChatActionTypes.PERSIST_REHYDRATE;
}


export type ChatAction = IChatMessage | IPersistRehydrate | IChatUserConected | IChatPrivateMessage;




