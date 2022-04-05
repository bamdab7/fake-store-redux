import React, {useEffect} from "react"; 
//para poder obtener el valor del parametro variable y asi poder mostrar detalle
import { useParams } from "react-router-dom";
//importaremos axios para poder hacer la consulta de detalle
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";

//tendremos nuestra pagina de detalles del producto
const ProductDetail = () =>{
    const product = useSelector((state)=>state.product); //devolvera un estado, pero tendremos que crear un reductor
    //esta constante nos dara la identificacion del producto
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    //funcion que me va a mostrar el detalle del producto de busqueda
    const fetchProductDetail = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err)=>{
                console.log("error", err);
            });
            //necesitaremos enviar las acciones
            dispatch(selectedProducts(response.data)); //esto viene desde productsActions y le metemos nuestra consulta
        };
        useEffect(()=>{ //esto nos llama a nuestro producto
        //este efecto se ejecutara si tenemos la identificacion del producto, y si nuestra idenfiticacion del producto no e sigual a vacio 
            if(productId && productId !== "") fetchProductDetail(); 
            }, [productId]); // debe ejecutarse cada vez que la identificacion del produto cambie
        return(
            <div>
                <h1>Detalles del producto</h1>
            </div>
        );
};

export default ProductDetail;