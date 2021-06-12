import * as bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from "express";
import { getRepository } from 'typeorm';
import { People } from './../../entity/Peopple';




export class peopleController {


    static all = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const peopleRepository = getRepository(People);
            const people = await peopleRepository.find();
            response.send(people);
        } catch (error) {
            console.error(error)
        }

    }

    static save = async (request: Request, response: Response, next: NextFunction) => {

        const { senha_peo, email_peo } = request.body;
        if (!senha_peo) {
            response.status(400).send({ erro: 'senha_peo field is required!' })
        }


        let peopleRepository = getRepository(People);

        const validEmail = await peopleRepository
            .createQueryBuilder()
            .where("email_peo  = :email_peo", { email_peo })
            .getMany()

        if (validEmail.length > 0) {
            response.status(400).send({ erro: 'email is already in use by another user' })
        }


        let salt = bcrypt.genSaltSync(10);
        var senha_pes_hash = bcrypt.hashSync(senha_peo, salt);
        try {


            let people = new People;
            people.nome_peo = request.body.nome_peo;
            people.sobre_nome_peo = request.body.sobre_nome_peo;
            people.email_peo = request.body.email_peo;
            people.senha_peo = senha_pes_hash;



            const res = await peopleRepository.save(people);
            response.status(200).send(res)

        } catch (error) {
            response.status(400).send({ error })
        }



    }

    static update = async (request: Request, response: Response, next: NextFunction) => {

        const { senha_peo, id_pes } = request.body;


        if (!id_pes) {
            response.status(400).send({ erro: 'id_pes field is required!' })
        }

        if (!senha_peo) {
            response.status(400).send({ erro: 'senha_pes field is required!' })
        }

        let salt = bcrypt.genSaltSync(10);
        var senha_pes_hash = bcrypt.hashSync(senha_peo, salt);


        const peopleRepository = getRepository(People);
        const peopleToUpdate = await peopleRepository.findOne(id_pes);
        peopleToUpdate.nome_peo = request.body.nome_pes;
        peopleToUpdate.sobre_nome_peo = request.body.sobre_nome_pes;
        peopleToUpdate.email_peo = request.body.email_pes;
        peopleToUpdate.senha_peo = senha_pes_hash;

        const pessoa = await peopleRepository.save(peopleToUpdate);
        response.status(200).send({ id_peo: pessoa.id_peo })

    }



    static remove = async (request: Request, response: Response, next: NextFunction) => {
        const peopleRepository = getRepository(People);
        const userToRemove = await peopleRepository.findOne(request.params.id);
        await peopleRepository.remove(userToRemove);
    }



}