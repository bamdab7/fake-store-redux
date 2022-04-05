import React, {useEffect} from "react";
//importamos los axios para hacer consultas a nuestra API
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions"; //le pasaremos estos productos a nuestra accion
import ProductComponent from "./ProductComponent";

//tendremos nuestra lista de productos

const ProductListing = () =>{ //busqueda del producto de la tienda
    //usamos un selector de uso para poder obtener los productos
    const products= useSelector((state) => state); //nos devolvera un estado (productos)
    const dispatch = useDispatch(); //con esto enviaremos acciones de redux

//funcion que obtendrá todos los productos
    const fetchProducts = async ()=>{ //funcion asincrona ya que viene por http [FUNCION BUSQUEDA PRODUCTOS]    
        //constante que da una respuesta
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log("error", err);
            }); //para manejar el error 
            dispatch(setProducts(response.data)); //le pasamos los productos
            //al pasarle estos productos a esta accion, ésta se dirigirá a productsAction y devolverá los datos corectos (objeto), los cuales serán tomados por el reductor productReducer y obtendrá los productos establecidos. tras obtener los productos establecidos, obtendremos otro estado nuevo (el cual se actualizara con la carga util de los datos de nuestro servidor)
    }
    //funcion de busqueda, la cual llama a buscar productos
    useEffect(() => {
        fetchProducts();
    }, [] ); //le vamos a devolver los productos en array

    console.log("Products: " , products); //lo muestra dentro de un array
    return(
        <div className="ui grid container">
            {/* <h1>Lista de produtos</h1> */}
            <ProductComponent/>
            
        </div>
    );
}

export default ProductListing;