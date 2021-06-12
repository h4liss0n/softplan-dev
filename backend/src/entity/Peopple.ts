import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class People {

    @PrimaryGeneratedColumn()
    id_peo: number;

    @Column()
    nome_peo: string;

    @Column()
    sobre_nome_peo: string;

    @Column()
    email_peo: string;

    @Column()
    senha_peo: string;

}
