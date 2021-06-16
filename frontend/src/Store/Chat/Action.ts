
import { ChatActionTypes, IPrivateMessage, IUser } from "./Types";

export function ChatMessage(payload: IUser[]) {
    return {
        type: ChatActionTypes.CHAT_MESSAGE,
        payload

    };
}


export function ChatConnect(payload: IUser) {
    return {
        type: ChatActionTypes.CHAT_CONNECTED,
        payload
    };
}


export function ChatPrivateMessage(payload: IPrivateMessage) {
    return {
        type: ChatActionTypes.CHAT_PRIVATE_MESSAGE,
        payload
    };
}


