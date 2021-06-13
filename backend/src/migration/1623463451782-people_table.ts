import { MigrationInterface, QueryRunner } from "typeorm";

export class peopleTable1623463451782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        
        CREATE TABLE public.people
        (
            id_peo integer NOT NULL DEFAULT nextval('people_id_peo_seq'::regclass),
            email_peo character varying COLLATE pg_catalog."default" NOT NULL,
            name_peo character varying COLLATE pg_catalog."default" NOT NULL,
            last_name_peo character varying COLLATE pg_catalog."default" NOT NULL,
            login_email_peo character varying COLLATE pg_catalog."default" NOT NULL,
            password_peo character varying COLLATE pg_catalog."default" NOT NULL,
            sex_peo character varying COLLATE pg_catalog."default",
            naturalness_peo character varying COLLATE pg_catalog."default" NOT NULL,
            nationality_peo character varying COLLATE pg_catalog."default" NOT NULL,
            birth_date_peo date NOT NULL,
            cpf_peo character varying COLLATE pg_catalog."default" NOT NULL,
            create_date_peo timestamp without time zone NOT NULL,
            update_date_peo timestamp without time zone NOT NULL,
            CONSTRAINT "PK_3096974fe57fc483d85769ec1cc" PRIMARY KEY (id_peo)
        )

         
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
