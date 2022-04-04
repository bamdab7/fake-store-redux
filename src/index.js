import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//conectamos redux con nuestra aplicacion
import {Provider} from 'react-redux';
//importamos la tienda que creamos
import store from "./container/redux/store"; 

ReactDOM.render(
  <React.StrictMode>
    {/* dentro del proovedor(provider) pasaremos nuestra tienda */}
    <Provider store ={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

