import { combineReducers, createStore } from 'redux';

import PlayerReducer from './Reducers/userReducer';

let store;

//configuring the store
const configureStore = () => {
    if(!store) {
        store = createStore(combineReducers({
            user: PlayerReducer
        }))
    }
    return store;
}

export default configureStore;