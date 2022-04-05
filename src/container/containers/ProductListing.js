import React, {useEffect} from "react";
//importamos los axios para hacer consultas a nuestra API
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

//tendremos nuestra lista de productos

const ProductListing = () =>{ //busqueda del producto de la tienda
    //usamos un selector de uso para poder obtener los productos
    const products= useSelector((state) => state); //nos devolvera un estado (productos)

//funcion que obtendrá todos los productos
    const fetchProducts = async ()=>{ //funcion asincrona ya que viene por http [FUNCION BUSQUEDA PRODUCTOS]    
        //constante que da una respuesta
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log("error", err);
            }); //para manejar el error 
            //registro de la respuesta por consola, y asi se ve lo que se obtiene
        console.log(response.data); //datos de respuesta del producto
    }
    //funcion de busqueda, la cual llama a buscar productos
    useEffect(() => {
        fetchProducts();
    });

    console.log(products); //lo muestra dentro de un array
    return(
        <div className="ui grid container">
            {/* <h1>Lista de produtos</h1> */}
            <ProductComponent/>
            
        </div>
    );
}

export default ProductListing;