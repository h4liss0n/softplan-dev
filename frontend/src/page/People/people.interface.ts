export interface IPeople {
    id_peo: number;
    name_peo: string;
    last_name_peo: string;
    login_email_peo: string;
    password_peo: string;
    email_peo: string;
    sex_peo: string;
    naturalness_peo: string;
    nationality_peo: string;
    birth_date_peo: string;
    cpf_peo: string;
}



export interface IListPeople {
    id_peo: number;
    name_peo: string;
    last_name_peo: string;
    login_email_peo: string;
    password_peo: string;
    email_peo: string;
    sex_peo: string;
    naturalness_peo: string;
    nationality_peo: string;
    birth_date_peo: string;
    cpf_peo: string;
    create_date_peo :string;
    update_date_peo :string;
}


export interface IParamPeople {
    id: string | undefined;
}