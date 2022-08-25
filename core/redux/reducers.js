import { combineReducers } from "redux";

import Cart from "./reducers/cartReduce";
import products from "./reducers/productsReduce";
const rootReducer = combineReducers({ Cart: Cart, products_list: products });

export default rootReducer;
