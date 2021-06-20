import { AuthActionTypes, ICreateUser, IloginRequest, IloginSucesse } from "./Types";

export function RequestLogin(payload: IloginRequest) {
    return {
        type: AuthActionTypes.REQUEST_LOGIN,
        payload

    };
}

export function RequestLoginGoogle(payload: any) {
    return {
        type: AuthActionTypes.REQUEST_LOGIN_GOOGLE,
        payload

    };
}


export function LoginSucesse(payload: IloginSucesse) {
    return {
        type: AuthActionTypes.LOGIN_SUCESSE,
        payload

    };
}
export function LoginFalure() {
    return {
        type: AuthActionTypes.LOGIN_FALUERE        

    };
}

export function LoginLogout() {
    return {
        type: AuthActionTypes.LOGIN_LOGOUT        

    };
}

export function RequestLogout() {
    return {
        type: AuthActionTypes.REQUEST_LOGOUT

    };
}

export function LoginCreateUser(payload: ICreateUser) {
    return {
        type: AuthActionTypes.LOGIN_CREATUSER,
        payload
    };
}

