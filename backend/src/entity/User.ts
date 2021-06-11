import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id_pes: number;

    @Column()
    nome_pes: string;

    @Column()
    sobre_nome_pes: string;

    @Column()
    email_pes: string;

    @Column()
    senha_pes: string;

}
