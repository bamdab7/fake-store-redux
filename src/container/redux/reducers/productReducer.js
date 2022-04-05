import { ActionTypes } from "../constants/action-types";

//crearemos un estado inicial para nuestro producto
const initialState={ //productos será inicialmente un array vacio, luego le añadimos informacion
    products:[], 
}; 
export const productReducer = (state=initialState, {type,payload} ) =>{ //añadiremos el estado inicial el parametro action
    //añadimos los casos posibles mediante un switch
    switch(type){
        case ActionTypes.SET_PRODUCTS: 
            return {...state, products:payload }; //devuelve los datos del servidor
            //al comienzo toma los datos existentes y tras tener el estado, agrega los productos con la carga util que nosotros tengamos
        default:
            return state;
    }
};

//creacion de un reductor para poder devolver el detalle del producto y no todo
        //estado de un objeto vacio y una accion desestructurada con tipo y carga
export const selectedProductReducer = (state={},{type, payload}) =>{ 
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }; //desesctructura la carga util
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {  }; //tendremos el producto seleccionado y querremos eliminarlo, por tanto devolveremos un objeto vacio
        default:
            return state;
    }
};
 
