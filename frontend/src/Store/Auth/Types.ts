export enum AuthActionTypes {
    LOGIN_SUCESSE = "login@SUCESSE",
    REQUEST_LOGIN = "login@REQUEST",
    REQUEST_LOGIN_GOOGLE = "logout@REQUEST_GOOGLE",
    REQUEST_LOGOUT = "logout@REQUEST",    
    LOGIN_FALUERE = "login@FALURE",
    LOGIN_CREATUSER = "login@CREATEUSER",
    LOGIN_LOGOUT = "login@LOGOUT",
    PERSIST_REHYDRATE = "persist/REHYDRATE"

}

export interface IAuthMsg {
    id: number;
}

export interface IloginRequest {
    email: string;
    password: string;
    prevPath: string;
}

export interface ICreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

}

export interface IloginSucesse {
    token: string;   
}


export interface INotification {
    id: number;
}

export interface IAuthState {
    isAuthenticated: boolean;
    developer: boolean;
    loading: boolean;
    token: string;
    id: string;
    nome: string

}

export interface IAuthSucess {
    type: AuthActionTypes.LOGIN_SUCESSE;
    payload: IloginSucesse;
}

export interface IAuthRequestGoogle {
    type: AuthActionTypes.REQUEST_LOGIN_GOOGLE;
    payload: any;
}

export interface IAuthRequest {
    type: AuthActionTypes.REQUEST_LOGIN;
    payload: IloginRequest;
}

export interface IAuthCreateUser {
    type: AuthActionTypes.LOGIN_CREATUSER;
    payload: ICreateUser;
}

export interface IAuthFalure {
    type: AuthActionTypes.LOGIN_FALUERE;
}

export interface IAuthlogout {
    type: AuthActionTypes.LOGIN_LOGOUT;
}

export interface IPersistRehydrate {
    type: AuthActionTypes.PERSIST_REHYDRATE;
}


export type AuthenticationAction = IAuthSucess | IAuthRequest | IAuthFalure | IAuthlogout | IAuthCreateUser | IPersistRehydrate | IAuthRequestGoogle;




