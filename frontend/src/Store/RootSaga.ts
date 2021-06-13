import { all } from 'redux-saga/effects';
import { AuthSaga } from './Auth/Saga';



export default function* rootSaga() {
    yield all([
        AuthSaga(),
    ])
}