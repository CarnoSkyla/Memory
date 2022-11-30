import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import PlayerReducer from './Reducers/userReducer';
import ScoreReducer from './Reducers/scoreReducer';

//configuring the store
const configureStore = combineReducers({
    user: PlayerReducer,
    score: ScoreReducer
})

const middleware = applyMiddleware(composeWithDevTools(thunk))

export default createStore(configureStore, middleware);