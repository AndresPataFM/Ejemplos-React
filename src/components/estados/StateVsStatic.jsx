// Dependencias de react
import React, { useState } from 'react';

// Importo otros componentes
import State from './State';
import Static from './Static';

function App() {
  // Declaramos el estado
  // Por convención, la función que asigna a la variable nombreVariable es setNombreVariable
  const [counterState, setCounterState] = useState(0)
  /* 
  Es un destructuring de:
  const state = useState(0)
  let counterState = state[0]
  let setCounterState = state[1]
  */
  // Declaramos la variable que va a ser prop
  let counterStatic = 0
  // Función que aumenta el counter
  const count = ()=>{
    setCounterState(counterState+1)
    counterStatic++
  }
  return (
    <div className="App">
      <h2>Contadores con state y prop</h2>
      {/* No le ponemos () asi no se ejecuta solo */}
      <button onClick={count} >CONTAR</button>
      <div>
        <h3>Prop Estatico</h3>
        <Static counter={counterStatic} />
      </div>
      <div>
        <h3>Estado</h3>
        <State counter={counterState} />
      </div>
      
    </div>
  );
}

export default App;
