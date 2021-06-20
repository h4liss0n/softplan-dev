import { Router } from "express";
import AuthenticatorController from "./authenticator.controller";


const AuthenticatorRouter = Router();
/**
 * authentication basic base64
 * @route POST /api/v1/authentication
 * @param {string} authorization.header.required - basic aGFsaXNzb25AZ21haWwuY29tOjEyMw==
 * @group auth - login user  
 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
 */
AuthenticatorRouter.post("/api/v1/authentication", AuthenticatorController.authentication);

/**
 * This function autorizarion request with JWT token
 * @route POST /api/v1/autorizarion 
 * @group auth - login user
 * @param {string} authorization.header.required - authorization eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdXRoIjp7ImlkIjoxLCJlbWFpbCI6ImhhbGlzc29uQGdtYWlsLmNvbSIsIm5hbWUiOiJIYWxpc3NvbiJ9fQ.SIX16FBHrSAYW_RJ9AdczdZJxGmZIVpUNElfaQXJ714
 */
AuthenticatorRouter.post("/api/v1/autorizarion",  AuthenticatorController.autorizarion);


/**
 * This function login with google auth2
 * @route POST /api/v1/auth/google
 * @group auth - login user
 * @param {string} profileObj.body.required - google profile
 */

AuthenticatorRouter.post("/api/v1/auth/google",  AuthenticatorController.google);


export default AuthenticatorRouter;