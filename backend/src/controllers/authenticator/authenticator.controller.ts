import * as base64 from "base-64";
import * as bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import * as jwt from "jwt-simple";
import { getRepository } from "typeorm";
import { People } from "../../entity/Peopple";
import { ITokenResponse } from "./authenticator.interface";

export const APP_AUTH_SECRET = 'dsahufhuasduhfuhadsuhf'


class AuthenticatorController {

    static autorizarion = async (request: Request, response: Response, next: NextFunction) => {

        let token = request.headers.authorization || "";
        // pegar apenas o token
        if (token.split(' ').length > 0) token = token.split(' ')[1]

        const secret = 'dhfasuhfhsdaufhsduf@123';
        let decoded = undefined;
        try {
            decoded = jwt.decode(token, secret);

            response.status(200).send('Autorization');
        } catch (error) {
            response.status(401).send();
        }

    }
    static authentication = async (request: Request, response: Response, next: NextFunction) => {



        let user = '';
        let password = '';
        let headerAuth = request.headers.authorization || '';
        headerAuth = base64.decode(headerAuth.split(' ')[1])

        user = headerAuth.split(':')[0];
        password = headerAuth.split(':')[1];

        console.log(user, password)

        if (!user) {
            response.status(400).send({ erro: 'email field is required!' })
        }

        if (!password) {
            response.status(400).send({ erro: 'password field is required!' })
        }

        const peopleRepository = getRepository(People);
        const people = await peopleRepository
            .createQueryBuilder("p")
            .where("p.email_peo = :email", { email: user })
            .getOne();

        if (!people) {
            response.status(401).send({ erro: 'email not is valid' });
        }

        if (!bcrypt.compareSync(password, people.senha_peo)) {
            response.status(401).send({ erro: 'password not is valid!' });
        }

        const auth: ITokenResponse = {
            id: people.id_peo,
            email: people.email_peo,
            name: people.sobre_nome_peo
        }

        let payload = { auth };
        let secret = APP_AUTH_SECRET;
        var token = jwt.encode(payload, secret);


        response.status(200).send({ token: token });
    }



}

export default AuthenticatorController