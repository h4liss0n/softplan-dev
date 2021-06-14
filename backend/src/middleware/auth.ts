import { Request, Response } from "express";
import * as jwt from "jwt-simple";
import { APP_AUTH_SECRET } from "../controllers/Authenticator/authenticator.controller";



const AuthMiddleware = (req: Request, resp: Response, next) => {


        let token = req.headers.authorization || "";
        if (token.split(' ').length > 0) token = token.split(' ')[1]
        let decoded = undefined;
        try {
                decoded = jwt.decode(token, APP_AUTH_SECRET);
        } catch (error) {
                resp.status(401).send();
        }
        next();
};

export default AuthMiddleware;
