import { combineReducers } from 'redux';
import auth from './Auth/Reducer';
import chat from './Chat/Reducer';

export default combineReducers({
    auth, 
    chat
})


