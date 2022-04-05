import React from "react";
import { useSelector } from "react-redux";

//tendremos nuestra lista de productos

const ProductComponent = () =>{
    const products= useSelector((state) => state.allProducts.products); //dentro de todos los productos esta nuestro producto, el cual será el que necesitamos
    //desestructuramos producto para asi poder obtener cada una de las propiedades
   // const {id,title} = products[0]; //esto vendra  del producto, me va a dar una matriz de productos 
    //en este caso la matriz le ponemos productos cero porque solo tenemos un registro
    return(
        <div className="four column wide">
            <div className="ui link cards">
                {/*tarjetas de enlace ^ */}
                <div className="card">
                    {/* la tarjeta como tal ^ */}
                    <div className="image"> </div>
                    <div className="content">
                        {/* <div className="header">{title}</div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductComponent;