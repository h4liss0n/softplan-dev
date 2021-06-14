import { MigrationInterface, QueryRunner } from "typeorm";

export class peopleUser11623464143519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`

        INSERT INTO public.people(
            id_peo, email_peo, name_peo, last_name_peo, login_email_peo, password_peo, sex_peo, naturalness_peo, nationality_peo, birth_date_peo, cpf_peo, create_date_peo, update_date_peo)
            VALUES (1, 'halisson@hotmail.com', 'Halisson' , 'Skalee', 'halisson@gmail.com', '123', 'M' , 'Brasileiro', 'Brasileiro', '1989-06-21', '621.630.483-65',  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
        
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
