import { MigrationInterface, QueryRunner } from "typeorm";

export class googleId1624203771770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query( `        
        alter table people 
            add google_id_peo character varying COLLATE pg_catalog."default" ;
        
        ` )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
