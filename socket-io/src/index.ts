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

io.use((socket: ISocket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    socket.username = username;
    next();
});


io.on("connection", (socket: ISocket) => {


    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: (socket as ISocket).username,
        });
    }
    socket.emit("users", users);
    
    socket.broadcast.emit("user connected", {
        userID: socket.id,
        username: socket.username,
    });

    

    socket.on('disconnect', () => {        
        // console.log(`left`, socket.username )
        socket.broadcast.emit("user disconnect", {
            userID: socket.id,
            username: socket.username,
        });

    })


    socket.on("private message", ({ content, to }) => {
        socket.to(to).emit("private message", {
          content,
          from: socket.id,
        });
      });

});






httpServer.listen(8091, () => {
    console.log(`localhost:8091`);
})






