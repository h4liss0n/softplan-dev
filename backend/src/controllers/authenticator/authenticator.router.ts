import { Router } from "express";
import AuthenticatorController from "./authenticator.controller";




const AuthenticatorRouter = Router();

AuthenticatorRouter.post("/api/v1/authentication", AuthenticatorController.authentication);
AuthenticatorRouter.post("/api/v1/autorizarion",  AuthenticatorController.autorizarion);


export default AuthenticatorRouter;