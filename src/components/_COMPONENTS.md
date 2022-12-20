# Componentes
Los componentes son en terminos burdos los bloques de armado de nuestra página React. Estos son funciones constructoras.

## Estructura
Su estructura básica es:
``` jsx
import React from 'react';

const Component = ({prop1, prop2, ... propX}){
    return(
        <div>
            ...
        </div>
    )
}
export default Component
```
> Acuerdense que el Componente se nombra con PascalCase, PascalCase es una nomenclatura similar a camelCase solo que la primera letra es en mayuscula. Ademas, el archivo .jsx/.tsx/.js/.ts donde se ubica debe poseer solo ese componente y llamarse IGUAL (Mayusculas y todo) que el componente.
> Todas las propiedades se reciben como 1 objeto único y lo normal es usar destructuring.


Para usarlo en otro lugar como etiqueta
``` jsx
import React from 'react'
import NombreComponente from "link relativo al componente"

<NombreComponente prop1={x} prop2={y} {etcetera}>

```
entoces al recibir esos props se podrian destructurizar en

```jsx
const NombreComponente({prop1, prop2}){
    return(
        <div>Esta es prop1: {prop1} y esta es prop2: {prop2}</div>
    )
}
```


### Cosas a tener en cuenta
* Usar PascalCase al nombrar
* Hacer bien las importaciones (son case sensitive y generan errores graves al hacerlas mal)
* Solo 1 componente por archivo
* No se olviden del export, sin export no seria funcional

## Llamado
Para usar un componente hay que importarlo como módulo
