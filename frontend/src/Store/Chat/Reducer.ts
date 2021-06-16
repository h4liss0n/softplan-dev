
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
        messages: [],
        yourself: false
      }

      const index = state.findIndex(usu => usu.username === user.username);

      console.log('index', index)

      if (index === -1) {
        console.log('Add', user)
        return [...state, user]
      } else {
        console.log('update', user)
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
          fromSelf: false,
          content: action.payload.content,
        }
        // const messages = [...newState[index].messages]
        // messages.push(msg);
        // console.log('messages',messages)

        // newState[index].messages = [];
        // newState[index].messages = messages;
        newState[index].messages.push(msg)

        console.log('newState', newState)

        return newState
      }
      return state;



    }






  }
  return state;
}




