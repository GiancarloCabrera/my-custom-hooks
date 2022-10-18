import { useState } from "react"

                        //Si viene vacio sera igual a 10
export const useCounterCustomHooks = ( initialState = 10 ) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter( counter + 1 );
  }

  const decrement = () => {
    setCounter( counter - 1 );
  }

  const reset = () => {
    //Una vez se de click en reset, volvera al estado inicial
    // el cual esta guardado en la variable initialState
    setCounter( initialState )
  }

  //Necesito que la funcion me retorne el state y mis dos funciones de
  // incrementar y decrementar
  return {
    counter,
    increment,
    decrement,
    reset
  };
}
