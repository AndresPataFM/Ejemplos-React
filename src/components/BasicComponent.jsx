import React from 'react';
// siempre van a tener que importar React para que sea funcional su componente

const BasicComponent = ({msg})=>{
    // Los componentes SIEMPRE llamenlos igual al nombre del archivo y este se hace en PascalCase al ser funciones constructoras (un camelCase pero la primera letra es mayuscula)
    // Su estructura básica es:
    /*
    const Componente = (propiedad1, propiedad2, ... propiedadFinal){
        //aca se pone toda la lógica
        // vean que el return contiene (), este siempre retorna solo 1 elemento html que puede tener varios hijos, cualquier código que se quiera hacer de lógica interna se hace dentro de {}
        return(
            <div>
                ...
            </div>
        )
    }
    */
    // las propiedades se reciben como un objeto único, pero aca lo destructuramos apra utilizar la propiedad msg únicamente
    return(
        <div>
            {/* Sepan que no se agregan comentarios por fuera del html a entregar */}
            <h3>Componente</h3>
            <p>Hola soy un componente, mi mensaje es: {msg}</p>
        </div>
    )
}

//  para ser importado en otro lado lo exportamos, es default ya que es lo que se espera exportar por defecto del archivo y simplifica la importación
export default BasicComponent