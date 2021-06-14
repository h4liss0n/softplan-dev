import { NextFunction, Request, Response } from "express";
import { getRepository } from 'typeorm';
import { isValidCPF } from "../../util/validade";
import { People } from './../../entity/Peopple';


const existEmailLogin = (id: number, email: string): Promise<boolean> => {
    const peopleRepository = getRepository(People);
    return peopleRepository
        .createQueryBuilder()
        .where(" id_peo  <> :id ", { id })
        .andWhere("upper(login_email_peo)  = upper(:email)", { email })
        .getOne().
        then(value => value ? true : false)
}


const existEmail = (id: number, email: string): Promise<boolean> => {
    const peopleRepository = getRepository(People);
    return peopleRepository
        .createQueryBuilder()
        .where(" id_peo  <> :id ", { id })
        .andWhere("upper(email_peo)  = upper(:email)", { email })
        .getOne().
        then(value => value ? true : false)
}



const existCPF = (id: number, cpf: string): Promise<boolean> => {
    const peopleRepository = getRepository(People);
    return peopleRepository
        .createQueryBuilder()
        .where(" id_peo  <> :id ", { id })
        .andWhere("upper(cpf_peo)  = upper(:cpf)", { cpf })
        .getOne().
        then(value => value ? true : false)
}




export class peopleController {


    static all = async (request: Request, response: Response, next: NextFunction) => {

        const id = request.query.id as string;
        const name = request.query.name as string;
        const peopleRepository = getRepository(People);
        let people = undefined;

        try {
            if (id) {
                people = await peopleRepository.findOne(id, {});
            } else
                if (name) {
                    people = await peopleRepository.createQueryBuilder()
                        .andWhere("name_peo ilike :name", { name: `%${name}%` })
                        .getMany();
                }
                else {
                    people = await peopleRepository.find();
                }
            response.send(people);
        } catch (error) {
            response.send({ error });

        }

    }

    static save = async (request: Request, response: Response, next: NextFunction) => {

        const { password_peo, email_peo, cpf_peo, login_email_peo } = request.body;

        if (!password_peo) {
            response.status(203).send({ erro: 'password_peo field is required!' })
            return
        }

        if (!isValidCPF(cpf_peo)) {
            response.status(203).send({ erro: 'It is not valid' })
            return;
        }

        const peopleRepository = getRepository(People);


        if (await existEmailLogin(0, login_email_peo)) {
            response.status(203).send({ erro: `email of login is already in use by another user:  ${email_peo}` })
            return;
        }


        if (await existEmail(0, email_peo)) {
            response.status(203).send({ erro: `email is already in use by another user:  ${email_peo}` })
            return;
        }

        if (await existCPF(0, cpf_peo)) {
            response.status(203).send({ erro: 'CPF is already in use by another user' })
            return;
        }




        try {

            let people = new People;
            people.email_peo = request.body.email_peo;
            people.name_peo = request.body.name_peo;
            people.last_name_peo = request.body.last_name_peo;
            people.login_email_peo = request.body.login_email_peo;
            people.password_peo = request.body.password_peo;
            people.sex_peo = request.body.sex_peo;
            people.naturalness_peo = request.body.naturalness_peo;
            people.nationality_peo = request.body.nationality_peo;
            people.birth_date_peo = request.body.birth_date_peo;
            people.cpf_peo = request.body.cpf_peo;
            people.create_date_peo = new Date();
            people.update_date_peo = new Date();

            const res = await peopleRepository.save(people);
            response.status(201).send(res)

        } catch (error) {
            response.status(206).send({ erro: error.message })
        }



    }

    static update = async (request: Request, response: Response, next: NextFunction) => {

        const { id_peo, email_peo, cpf_peo, login_email_peo } = request.body;

        if (!id_peo) {
            response.status(400).send({ erro: 'id_peo field is required!' })
            return;
        }

        if (!isValidCPF(cpf_peo)) {
            response.status(203).send({ erro: 'It is not valid' })
            return;
        }

        const peopleRepository = getRepository(People);
        const peopleToUpdate = await peopleRepository.findOne(id_peo);

        if (!peopleToUpdate) {
            response.status(206).send({ erro: 'people not found!' })
            return;
        }



        if (await existEmailLogin(id_peo, login_email_peo)) {
            response.status(203).send({ erro: `email of login is already in use by another user:  ${email_peo}` })
            return;
        }


        if (await existEmail(id_peo, email_peo)) {
            response.status(203).send({ erro: `email is already in use by another user:  ${email_peo}` })
            return;
        }

        if (await existCPF(id_peo, cpf_peo)) {
            response.status(203).send({ erro: 'CPF is already in use by another user' })
            return;
        }


        peopleToUpdate.email_peo = request.body.email_peo;
        peopleToUpdate.name_peo = request.body.name_peo;
        peopleToUpdate.last_name_peo = request.body.last_name_peo;
        peopleToUpdate.login_email_peo = request.body.login_email_peo;
        peopleToUpdate.password_peo = request.body.password_peo;
        peopleToUpdate.sex_peo = request.body.sex_peo;
        peopleToUpdate.naturalness_peo = request.body.naturalness_peo;
        peopleToUpdate.nationality_peo = request.body.nationality_peo;
        peopleToUpdate.birth_date_peo = request.body.birth_date_peo;
        peopleToUpdate.cpf_peo = request.body.cpf_peo;
        peopleToUpdate.update_date_peo = new Date();
        const pessoa = await peopleRepository.save(peopleToUpdate);
        response.status(200).send({ id_peo: pessoa.id_peo })


    }



    static remove = async (request: Request, response: Response, next: NextFunction) => {

        const { id } = request.params;

        if (!id) {
            response.status(203).send({ erro: 'param id is required!' })
            return;
        }

        const peopleRepository = getRepository(People);
        const peopleToRemove = await peopleRepository.findOne(id);

        if (!peopleToRemove) {
            response.status(206).send({ erro: 'people not found!' })
            return;
        }
        const rem = await peopleRepository.remove(peopleToRemove);
        response.status(204).send(rem)

    }



}