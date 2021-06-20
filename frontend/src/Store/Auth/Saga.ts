
import * as base64 from "base-64";
import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../Service/Api';
import history from '../../Service/History';
import * as actions from './Action';
import * as types from './Types';

export interface ITokenRequest {
  email: string
  password: string
}







function* Requestlogin(data: any): any {
  try {
    const basic = base64.encode(`${data.payload.email}:${data.payload.password}`);
    Api.defaults.headers.authorization = `basic ${basic}`;
    const res = yield call(Api.post, `/api/v1/authentication`);

    if (res.status === 401) {
      yield put(actions.LoginFalure());
      return;
    }

    
    

    const loginSucesse: types.IloginSucesse = {
      token: res.data.token
    }

    yield put(actions.LoginSucesse(loginSucesse))
    Api.defaults.headers.authorization = `bearer ${res.data.token}`;

    history.push('/home');

  } catch (error) {
    yield put(actions.LoginFalure());
  }
}


function* RequestloginGoogle(data: any): any {
  try {
    
    const res = yield call(Api.post, `/api/v1/auth/google`, {profileObj: data.payload.profileObj});

    if (res.status === 401) {
      yield put(actions.LoginFalure());
      return;
    }   
    

    const loginSucesse: types.IloginSucesse = {
      token: res.data.token
    }

    yield put(actions.LoginSucesse(loginSucesse))
    Api.defaults.headers.authorization = `bearer ${res.data.token}`;

    history.push('/home');

  } catch (error) {
    yield put(actions.LoginFalure());
  }
}

function* RequestLogout(data: any) {
  yield put(actions.LoginLogout());
  history.push('/login');
}

function* PersistRehydrate({ payload }: any) {
  try {
    if (payload) Api.defaults.headers.authorization = `bearer ${payload.auth.token}`;
  } catch (error) {
    yield put(actions.LoginLogout());
  }
}


function* AuthSaga() {
  yield takeLatest(types.AuthActionTypes.REQUEST_LOGIN, Requestlogin);
  yield takeLatest(types.AuthActionTypes.REQUEST_LOGIN_GOOGLE, RequestloginGoogle);
  yield takeLatest(types.AuthActionTypes.PERSIST_REHYDRATE, PersistRehydrate);
  yield takeLatest(types.AuthActionTypes.REQUEST_LOGOUT, RequestLogout);
}

export { AuthSaga };





