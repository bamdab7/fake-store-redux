import { ActionTypes } from "../constants/action-types";

//crearemos un estado inicial para nuestro producto
const initialState={ //productos será inicialmente un array vacio
    products:[{
        id: 1, 
        title: "First title",
        category: "best category",
    }], 
}
export const productReducer = (state=initialState, {type,payload} ) =>{ //añadiremos el estado inicial el parametro action
    //añadimos los casos posibles mediante un switch
    switch(type){
        case ActionTypes.SET_PRODUCTS: 
            return state;
        default:
            return state;

    }

}