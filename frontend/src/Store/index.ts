import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { IAuthState } from './Auth/Types';
import { IUser } from './Chat/Types';
import rootReducers from './RootReducers';
import rootSaga from './RootSaga';


export interface ApplicationState {
    auth: IAuthState,
    chat: IUser[] 
}

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth',]
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({

});

const pReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
    pReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

