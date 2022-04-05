import React from "react";
//importamos una etiqueta de enlace para poder acceder al detalle del producto
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//tendremos nuestra lista de productos

const ProductComponent = () =>{
    const products= useSelector((state) => state.allProducts.products); //dentro de todos los productos esta nuestro producto, el cual será el que necesitamos {viene de index reducers}

    //mostraremos los datos completos del producto en nuestro componente
    //crearemos una constante que renderizará una vista con los productos 
    const renderList = products.map((product) => {  //mapea la lista con los product
        //la consante que nos determinara los datos que vamos a mostrar
        const {id,title,image,price,category} = product; //todo esto viene del objeto product
            return( //añadiremos el id identificativo de cada uno de los cards
                <div className="four wide column" key={id}>
                    <Link to={`/product/${id}`}> 
                    {/* me llevara al link del detalle de producto con el id de la card,, que es dinamico */}
                        <div className="ui link cards">
                            {/*tarjetas de enlace ^ */}
                            <div className="card">
                                <div className="image"> 
                                    <img src={image} alt={title}/>
                                </div>
                                <div className="content">
                                    <div className="header">{title}</div>
                                    <div className="meta price"> $ {price}</div>.
                                    <div className="meta">  {category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
    })

    return <>{renderList}</>;  //veremos la lista de renderizado
    
};

export default ProductComponent;