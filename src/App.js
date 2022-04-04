import "./App.css"
import Header from './container/containers/Header';
//añadiendo enrutamiento a nuestro proyecto
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from "./container/containers/ProductListing";
import ProductDetail from "./container/containers/ProductDetail";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/> 
          <Routes>
            {/* creacion de las primeras rutas */}
            <Route path="/"  element={<ProductListing/>}/>
            <Route path="/product/:productId"   element={<ProductDetail/>}/>
            <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div> 
  );
}

export default App;
