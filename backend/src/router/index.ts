import { Router } from "express";
import AuthenticatorRouter from "../controllers/Authenticator/authenticator.router";
import PeopleRouter from "../controllers/people/people.router";
import SourceRouter from "../controllers/source/source.router";

const routes = Router();

routes.use(SourceRouter);
routes.use(AuthenticatorRouter);
routes.use(PeopleRouter);


export default routes;

