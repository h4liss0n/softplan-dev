import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class People {

    @PrimaryGeneratedColumn()
    id_peo: number;

    @Column()
    name_peo: string;

    @Column()
    last_name_peo: string;

    @Column()
    login_email_peo: string;

    @Column()
    password_peo: string;

    @Column()
    email_peo: string;

    @Column({ nullable: true })
    sex_peo: string;

    @Column({ nullable: false })
    naturalness_peo: string

    @Column({ nullable: false })
    nationality_peo :string

    @Column({ type: "date", nullable: false })
    birth_date_peo: Date;

    @Column({ nullable: false })
    cpf_peo :string        
    
    @Column({type:"timestamp"})
    create_date_peo: Date;

    @Column({type:"timestamp"})
    update_date_peo: Date;





}
