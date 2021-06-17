
import { ChatAction, ChatActionTypes, IMessages, IUser } from "./Types";



const INITIAL_STATE: IUser[] = [];

export default function AuthReducer(state = INITIAL_STATE, action: ChatAction): IUser[] {
  switch (action.type) {
    case ChatActionTypes.CHAT_MESSAGE: {
      return action.payload;
    }
    case ChatActionTypes.CHAT_CONNECTED: {

      const user: IUser = {
        userID: action.payload.userID,
        username: action.payload.username,
        isOffline: action.payload.isOffline,
        haveMessage: false,
        messages: [],
        yourself: false
      }

      const index = state.findIndex(usu => usu.username === user.username);

      if (index === -1) {

        return [...state, user]
      } else {

        let newState = [...state]
        newState[index] = user
        return newState
      }
    }

    case ChatActionTypes.CHAT_PRIVATE_MESSAGE: {
      const index = state.findIndex(usu => usu.userID === action.payload.from);

      if (index !== -1) {
        let newState = [...state]
        const msg: IMessages = {
          fromSelf: action.payload.yourself,
          content: action.payload.content,
        }
        newState[index].messages.push(msg)
        if (!action.payload.yourself) {
          newState[index].haveMessage = true;
        }

        return newState
      }
      return state;
    }
  }
  return state;
}




