import { MigrationInterface, QueryRunner } from "typeorm";

export class peopleTable1623463451782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE public.people
        (
            id_peo integer NOT NULL DEFAULT nextval('people_id_peo_seq'::regclass),
            nome_peo character varying COLLATE pg_catalog."default" NOT NULL,
            sobre_nome_peo character varying COLLATE pg_catalog."default" NOT NULL,
            email_peo character varying COLLATE pg_catalog."default" NOT NULL,
            senha_peo character varying COLLATE pg_catalog."default" NOT NULL,
            CONSTRAINT "PK_3096974fe57fc483d85769ec1cc" PRIMARY KEY (id_peo)
        )      
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
