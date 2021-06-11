import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as morgan from 'morgan';
import "reflect-metadata";
import { createConnection } from "typeorm";
import routes from "./router";





createConnection().then(async connection => {
    const app = express();
    const router = express.Router();    
    app.use(morgan('tiny'))
    app.use(bodyParser.json());
    

    
    app.use(cors())
    app.use(routes);    
    app.listen('8080');

    console.log(`localhost:8080`);

}).catch(error => console.log(
    `Erro ao conectar banco de dados!`, error));




