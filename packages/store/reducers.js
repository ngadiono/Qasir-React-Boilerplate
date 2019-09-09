import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import {Reducer as securityReducer} from '@qasir/security'
// import {reducer as testReducer} from '@qasir/test'

export default combineReducers({
    routing: routerReducer,
    // test: testReducer   
});