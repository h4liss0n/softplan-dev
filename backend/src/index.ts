
import "reflect-metadata";
import { createConnection } from "typeorm";
import app from './app';

createConnection().then(async connection => {
    app.listen('8090');
    console.log(`localhost:8090`);
}).catch(error => console.log(
    `Erro ao conectar banco de dados!`, error));







