import { MigrationInterface, QueryRunner } from "typeorm";

export class peopleId1623463380105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`

        CREATE SEQUENCE public.people_id_peo_seq
        INCREMENT 1
        START 1
        MINVALUE 1
        MAXVALUE 2147483647
        CACHE 1;
    
        ALTER SEQUENCE public.people_id_peo_seq
        OWNER TO postgres;

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
