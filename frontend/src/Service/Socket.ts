import { io } from "socket.io-client";

const URL = "http://localhost:8091";
const socket = io(URL, { autoConnect: false });


socket.onAny((event, ...args) => {
    console.info('log',event, args);
});


socket.on("connect_error", (err) => {
    console.log('connect_erro', err)
    if (err.message === "invalid username") {

    }
});





export default socket;