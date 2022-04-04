import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
    //esta constante lo que va a hacer será listarnos los productos gracias a un array
    return {
        type: ActionTypes.SET_PRODUCTS, //el tipo de accion que querremos mostrar
        payload: products,
    }
}

export const selectedProducts = (products) =>{
    //esta constante mostrara los productos que son seleccionados y los muestra
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}