import * as express from 'express';
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors = require('cors');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        allowedHeaders: ["Access-Control-Allow-Origin"],
    }
});


interface ISocket extends Socket {
    username?: string;
}

interface IUser {
    userID: string;
    username: string;
}

const  dataUsers: IUser[] = [];

const actionUser = {
    Add: (user: IUser) => {
        const exist = dataUsers.find((item) => item.userID == user.userID)
        if (exist) return { user: exist }
        dataUsers.push(user)

        return { user }

    },

    remove: (id: string) => {
        const index = dataUsers.findIndex((item) => item.userID === id);
        if (index !== -1) {
            return dataUsers.splice(index, 1)[0]
        }
    },

}




io.use((socket: ISocket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    socket.username = username;
    next();
});


io.on("connection", (socket: ISocket) => {

    for (let [id, socket] of io.of("/").sockets) {

        actionUser.Add({
            userID: id,
            username: (socket as ISocket).username,
        })
    }    

    socket.emit("users", dataUsers );


    socket.broadcast.emit("user connected", {
        userID: socket.id,
        username: socket.username,
    });


    socket.on('disconnect', () => {
        const user = actionUser.remove(socket.id);
        console.log(`left`, user, dataUsers.length)
    })





    
});






httpServer.listen(8091, () => {
    console.log(`localhost:8091`, dataUsers.length);
})






