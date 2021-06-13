
import { toast } from "react-toastify";
import { AuthActionTypes, AuthenticationAction, IAuthState } from "./Types";

const INITIAL_STATE: IAuthState = {
  token: '',
  isAuthenticated: false,
  developer: false,
  loading: false,
  nome: '',
  id: ''
}

export default function AuthReducer(state = INITIAL_STATE, action: AuthenticationAction): IAuthState {
  switch (action.type) {
    case AuthActionTypes.REQUEST_LOGIN: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.LOGIN_SUCESSE: {    
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        isAuthenticated: true,
        nome: '',
        id: '',
        developer: false
      };
    }
    case AuthActionTypes.LOGIN_FALUERE: {
      toast.error('Usuário ou senha ivalido');
      return INITIAL_STATE;
    }
    case AuthActionTypes.LOGIN_LOGOUT: {
      return INITIAL_STATE;
    }
  }
  return state;
}


