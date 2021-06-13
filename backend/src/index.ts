import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as expressSwagger from 'express-swagger-generator';
import * as morgan from 'morgan';
import "reflect-metadata";
import { createConnection } from "typeorm";
import routes from "./router";
import { options } from "./swaggerOptions";




createConnection().then(async connection => {
    const app = express();
    const router = express.Router();
    app.use(morgan('tiny'))
    app.use(bodyParser.json());    
    app.use(cors())
    app.use(routes);
    expressSwagger(app)(options)
    app.listen('8090');
    console.log(`localhost:8090`);
}).catch(error => console.log(
    `Erro ao conectar banco de dados!`, error));




