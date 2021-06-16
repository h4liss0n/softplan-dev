import { io } from "socket.io-client";
import { store } from "../Store";
import * as actions from '../Store/Chat/Action';
import { IUser } from "../Store/Chat/Types";
import { IPrivateMessage } from './../Store/Chat/Types';


const URL = "http://localhost:8091";
const socket = io(URL, { autoConnect: false });


socket.onAny((event, ...args) => {
    console.info('log', event, args);
});


socket.on("connect_error", (err) => {
    console.log('connect_erro', err)
    if (err.message === "invalid username") {

    }
});


socket.on("users", (users: IUser[]) => {


    const list = users.reduce<IUser[]>((total, value) => {
        total.push({
            userID: value.userID,
            username: value.username,
            isOffline: value.isOffline,
            messages: [],
            yourself: value.userID === socket.id
        })

        return total;
    }, [])

    store.dispatch(actions.ChatMessage(list))






});



socket.on("user connected", (user: IUser) => {
    console.log('user connected', user)
    store.dispatch(actions.ChatConnect(user))
});



socket.on("user disconnect", (user: IUser) => {

    // console.log('user disconnect', user)

    // setListUser((oldState) => {
    //   const index = oldState.findIndex(usu => usu.username === user.username);

    //   if (index !== -1) {
    //     oldState[index].isOffline = true;

    //     return [...oldState]
    //   }
    //   return oldState;
    // })

});

socket.on("private message", (value: IPrivateMessage) => {
    store.dispatch(actions.ChatPrivateMessage(value));
});





export default socket;



