import { MigrationInterface, QueryRunner } from "typeorm";

export class pessoaGen1623451745190 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`        
            CREATE SEQUENCE public.pessoa_id_pes_seq
            INCREMENT 1
            START 1
            MINVALUE 1
            MAXVALUE 2147483647
            CACHE 1;        
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
