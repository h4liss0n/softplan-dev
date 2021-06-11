import { Router } from "express";
import AuthenticatorRouter from "../controllers/Authenticator/authenticator.router";
import StatusRouter from "../controllers/Status/status.router";



const routes = Router();

routes.use(StatusRouter);
routes.use(AuthenticatorRouter);


export default routes;