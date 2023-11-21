
import {reducer} from './reducer'
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const testNum = () => [{ a: 'xx' }]
const rootReducer = combineReducers({
    reducer
});
export default createStore(rootReducer,
);