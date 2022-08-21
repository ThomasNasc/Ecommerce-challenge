import { combineReducers } from "redux";

import Cart from './reducers/cartReduce'

const rootReducer = combineReducers({Cart: Cart})

export default rootReducer;
