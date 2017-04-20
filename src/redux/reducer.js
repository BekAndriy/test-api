import { combineReducers, createStore } from 'redux';
import { test } from './store';


const rootReducer = combineReducers({
    test
});

export default createStore(rootReducer);