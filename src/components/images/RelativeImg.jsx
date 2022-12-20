import React from 'react';

const RelativeImg = ({source="", alt=""})=>{
    // Las imagenes relativas en react son en relacion a la ruta de la página, a estas alturas van a estar siemrpe en localhost:3000 o si lo levantaron en la raiz de la página (www.nombrepagina.com/) sepan que si modificanla ruta a algo como localhost:3000/producto o www.nombrepagina.com/producto a ../assets
    let position = "assets/"
    // si lo piensan renderizar el componente en distintas rutas van a tener que modificar la posición
    return(
        <img src={`${position}${source}`} alt={alt} />
    )
}

export default RelativeImg