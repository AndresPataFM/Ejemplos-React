# Componentes
Los componentes son en terminos burdos los bloques de armado de nuestra página React. Estos son funciones constructoras.

## Estructura
Su estructura básica es:
```
import React from 'react';

const Component = (prop1, prop2, ... propX){
    return(
        <div>
            ...
        </div>
    )
}
export default Component
```
> Acuerdense que el Componente se nombra con Pascalcase, PascalCase es una nomenclatura similar a camelCase solo que la primera letra es en mayuscula. Ademas, el archivo .jsx/.tsx/.js/.ts donde se ubica debe poseer solo ese componente y llamarse IGUAL (Mayusculas y todo) que el componente.

### Cosas a tener en cuenta
* Usar PascalCase al nombrar
* Hacer bien las importaciones (son case sensitive y generan errores graves al hacerlas mal)
* Solo 1 componente por archivo
* No se olviden del export, sin export no seria funcional

## Llamado
Para usar un componente hay que importarlo como módulo
