import React, {useEffect} from "react"; 
//para poder obtener el valor del parametro variable y asi poder mostrar detalle
import { useParams } from "react-router-dom";
//importaremos axios para poder hacer la consulta de detalle
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productActions";

//tendremos nuestra pagina de detalles del producto
const ProductDetail = () =>{
    const product = useSelector((state)=>state.product); //devolvera un estado, pero tendremos que crear un reductor
    const  {image,title,price,category,description} = product;
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
            //asi cada vez que volvamos atras, se "limpiará todo"
            return () => {
                    //hacemos un envio y llamamos a la eliminación
                    dispatch(removeSelectedProducts());
                }
            }, [productId]); // debe ejecutarse cada vez que la identificacion del produto cambie
        return(
            <div className="ui grid container">
                {Object.keys(product).length === 0 ? ( //si el producto esta vacio carga este texto y cuando tenga el producto, que muestre lo otro
                    <div>...Cargando </div>
                ) : ( 
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider"></div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image}></img>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label"> ${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Añadir al carrito</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>  
        ); 
};

export default ProductDetail;