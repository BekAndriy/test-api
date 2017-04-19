import { combineReducers, createStore } from 'redux';
import { search, playlist, userPage, userSession } from './store';


const rootReducer = combineReducers({
    search,
    playlist,
    userPage,
    userSession
});

export default createStore(rootReducer);