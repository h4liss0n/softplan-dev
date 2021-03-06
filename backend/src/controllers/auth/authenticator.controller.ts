import * as base64 from "base-64";
import { NextFunction, Request, Response } from 'express';
import * as jwt from "jwt-simple";
import { getRepository } from "typeorm";
import { People } from './../../entity/Peopple';
import { IGoogleProfile, ITokenResponse } from "./authenticator.interface";

export const APP_AUTH_SECRET = 'dsahufhuasduhfuhadsuhf'


class AuthenticatorController {

    static autorizarion = async (request: Request, response: Response, next: NextFunction) => {

        let token = request.headers.authorization || "";
        // pegar apenas o token
        if (token.split(' ').length > 0) token = token.split(' ')[1]


        let decoded = undefined;
        try {
            decoded = jwt.decode(token, APP_AUTH_SECRET);

            response.status(200).send('Autorization');
        } catch (error) {
            response.status(401).send();
        }

    }
    static authentication = async (request: Request, response: Response, next: NextFunction) => {
        let user = '';
        let password = '';
        let headerAuth = request.headers.authorization || '';
        headerAuth = base64.decode(headerAuth.split(' ').length === 2 ? headerAuth.split(' ')[1] : '')

        if (headerAuth.split(':').length = 2) {
            user = headerAuth.split(':')[0];
            password = headerAuth.split(':')[1];
        }




        if (!user) {
            response.status(401).send({ erro: 'email field is required!' })
            return
        }

        if (!password) {
            response.status(401).send({ erro: 'password field is required!' })
            return
        }

        const peopleRepository = getRepository(People);
        const people = await peopleRepository
            .createQueryBuilder("p")
            .where("p.login_email_peo = :email", { email: user })
            .getOne();

        if (!people) {
            response.status(401).send({ erro: 'email not is valid' });
            return
        }

        if (password !== people.password_peo) {
            response.status(401).send({ erro: 'password not is valid!' });
            return
        }

        const auth: ITokenResponse = {
            id: people.id_peo,
            email: people.login_email_peo,
            name: people.name_peo
        }

        let payload = { auth };
        let secret = APP_AUTH_SECRET;
        var token = jwt.encode(payload, secret);


        response.status(200).send({ token: token });
    }



    static google = async (request: Request, response: Response, next: NextFunction) => {
        const googleProfile = request.body.profileObj as IGoogleProfile
        const peopleRepository = getRepository(People);
        let  people = await peopleRepository
            .createQueryBuilder("p")
            .where("p.google_id_peo = :google_id_peo", { google_id_peo: googleProfile.googleId })
            .getOne();

        if (!people) {
            const newPeople = new People;
            newPeople.id_peo = 0;
            newPeople.google_id_peo = googleProfile.googleId;
            newPeople.name_peo = googleProfile.givenName;
            newPeople.last_name_peo = googleProfile.familyName;
            newPeople.email_peo  = googleProfile.email;
            newPeople.login_email_peo  = googleProfile.email;
            newPeople.password_peo  = '';
            newPeople.naturalness_peo  = '';
            newPeople.nationality_peo  = '';
            newPeople.cpf_peo  = '';
            newPeople.create_date_peo = new Date();
            newPeople.update_date_peo = new Date();            
            newPeople.birth_date_peo = new Date();            
            newPeople.sex_peo = 'M';

            people = await peopleRepository.save(newPeople);
            

        }
        

        const auth: ITokenResponse = {
            id: people.id_peo,
            email: people.login_email_peo,
            name: people.name_peo
        }

        let payload = { auth };
        let secret = APP_AUTH_SECRET;
        var token = jwt.encode(payload, secret);


        response.status(200).send({ token: token });
    }



}

export default AuthenticatorController