import { createStore } from "redux";
//importaremos el reducer 
import reducers from './reducers/index';

//crearemos una constante de la tienda que se va a igualar a la tienda redux
const store= createStore(reducers,{ }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
//futuraente añadir middlewares, añadimos un estado vacio a nuestra tienda

export default store;