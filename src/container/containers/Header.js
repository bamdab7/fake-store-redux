import React from "react";


//crearemos la constante del header
const Header = () => {
    return( //importante poner el return (xd) sino no devuelve nada!
    //creacion del header como tal gracias a la bilbioteca que hemos importado
    <div className="ui fixed menu">
        <div className="ui container center">
            <h2>Tienda de ropa</h2>
        </div>
    </div>
    );
};
export default Header;