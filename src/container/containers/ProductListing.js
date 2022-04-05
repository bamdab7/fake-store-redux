import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

//tendremos nuestra lista de productos

const ProductListing = () =>{ //busqueda del producto de la tienda
    //usamos un selector de uso para poder obtener los productos
    const products= useSelector((state) => state); //nos devolvera un estado (productos)
    console.log(products); //lo muestra dentro de un array
    return(
        <div className="ui grid container">
            {/* <h1>Lista de produtos</h1> */}
            <ProductComponent/>
            
        </div>
    );
}

export default ProductListing;