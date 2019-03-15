import { combineReducers } from 'redux';
import LoginReducer from './login/login_reducers';

const rootReducer = combineReducers({
    login: LoginReducer
});

export default rootReducer;