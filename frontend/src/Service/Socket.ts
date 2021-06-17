import { io } from "socket.io-client";
import { store } from "../Store";
import * as actions from '../Store/Chat/Action';
import { IUser } from "../Store/Chat/Types";
import { IPrivateMessage } from './../Store/Chat/Types';


const URL = "http://localhost:8091";
const socket = io(URL, { autoConnect: false });


socket.onAny((event, ...args) => {
    // console.info('log', event, args);
});


socket.on("connect_error", (err) => {
    
});


socket.on("users", (users: IUser[]) => {


    const list = users.reduce<IUser[]>((total, value) => {
        total.push({
            userID: value.userID,
            username: value.username,
            isOffline: value.isOffline,
            messages: [],
            haveMessage: false,
            yourself: value.userID === socket.id
        })

        return total;
    }, [])

    store.dispatch(actions.ChatMessage(list))






});



socket.on("user connected", (user: IUser) => {
    
    store.dispatch(actions.ChatConnect(user))
});



socket.on("user disconnect", (user: IUser) => {

    

    // setListUser((oldState) => {
    //   const index = oldState.findIndex(usu => usu.username === user.username);

    //   if (index !== -1) {
    //     oldState[index].isOffline = true;

    //     return [...oldState]
    //   }
    //   return oldState;
    // })

});

socket.on("private message", (value) => {
    const msg: IPrivateMessage = {
        content: value.content,
        from: value.from,
        yourself: false
    }

    store.dispatch(actions.ChatPrivateMessage(msg));
});





export default socket;



