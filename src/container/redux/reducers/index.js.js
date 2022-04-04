//combinacion de reducers
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

//esta constante nos agrupará todos los reducers en uno
const reducers= combineReducers({
    allProducts:productReducer,
    
})