import { useState } from "react"

                        //Si viene vacio sera igual a 10
export const useCounter = ( initialState = 10 ) => {
  const [state, setState] = useState(initialState);

                    //Si viene vacio sera igual a 1
  const increment = ( factor = 1 ) => {
    setState( state + factor );
  }

                    //Si viene vacio sera igual a 1
  const decrement = ( factor = 1 ) => {
    setState( state - factor );
  }

  const reset = () => {
    //Una vez se de click en reset, volvera al estado inicial
    // el cual esta guardado en la variable initialState
    setState( initialState )
  }

  //Necesito que la funcion me retorne el state y mis dos funciones de
  // incrementar y decrementar
  return {
    state,
    increment,
    decrement,
    reset
  };
}
