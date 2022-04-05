import { ActionTypes } from "../constants/action-types";

//crearemos un estado inicial para nuestro producto
const initialState={ //productos será inicialmente un array vacio, luego le añadimos informacion
    products:[], 
}
export const productReducer = (state=initialState, {type,payload} ) =>{ //añadiremos el estado inicial el parametro action
    //añadimos los casos posibles mediante un switch
    switch(type){
        case ActionTypes.SET_PRODUCTS: 
            return {...state, products:payload }; //devuelve los datos del servidor
            //al comienzo toma los datos existentes y tras tener el estado, agrega los productos con la carga util que nosotros tengamos
        default:
            return state;

    }

}