import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as expressSwagger from 'express-swagger-generator';
import * as morgan from 'morgan';
import routes from "./router";
import { options } from "./swaggerOptions";

const app = express();
const router = express.Router();
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(cors())
app.use(routes);
expressSwagger(app)(options)

export default app