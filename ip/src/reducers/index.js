import {combineReducers} from 'redux';
import UsersReducer from './reducer_userdata';
import Catalog from './reducer_catalog';

const rootReducer = combineReducers({
    userData: UsersReducer,
    catalog: Catalog
});

export default rootReducer;