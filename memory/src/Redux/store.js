import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import PlayerReducer from './Reducers/userReducer';

//configuring the store
const configureStore = combineReducers({
    user: PlayerReducer
})

const middleware = applyMiddleware(composeWithDevTools(thunk))

export default createStore(configureStore, middleware);