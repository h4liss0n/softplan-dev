import { MigrationInterface, QueryRunner } from "typeorm";

export class peopleUser11623464143519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO public.people(
            id_peo, nome_peo, sobre_nome_peo, email_peo, senha_peo)
            VALUES (1, 'halisson', 'skalee','halisson@gmail.com', '123');
        
        `)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
