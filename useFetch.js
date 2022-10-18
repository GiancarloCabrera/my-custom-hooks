import { useEffect, useRef } from "react";
import { useState } from "react"

export const useFetch = ( url ) => {
    // Creamos un useRef para que no haya gasto de memoria, aveces pasa que se sigue
    // haciendo peticiones incluso ya cuando el componente se dejo de usar, por ende 
    // usaremos un referencia que cuando sea false el componente deje de hacer peticiones a la
    // appi porque ya fue dejado de usar.

    const isMounted = useRef(true);

    //Tenemos un estado con este objeto
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    //Llamamos un efecto que cuando el componente deje de ser usado, osea
    // que cuando limpie. se vuelva mi ref a false

    useEffect( () => {
        //En la seccion de limpieza lo volvemos falso
        return () => {
            isMounted.current = false;
        }
    },[]) //El array vacio hace que el efecto dependa si el componente esta funcionando

    //Cada vez que el url cambie quiero hacer algo,
    // por ende voy a usar un efecto
    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        });
            
        //Hacemos fetch para hacer la request http a la url
        fetch( url )
        //Como eso devuelve una promesa, hago un then y esa resp la paso a json
            .then( resp => resp.json())
            //Luego obtengo la data de la resp que me mando la peticion http
                .then( data => {
                    setTimeout( () => {
                        console.log(isMounted.current)
                        //Si esta en true es porque el componente esta abierto y funcionando, entonces haga la peticion
                        if(isMounted.current){
                            //Actualizo mi objeto con la nueva data que me trajo esa url
                            //SI vuelve a buscar la url debe cargar, por ende loading debe estar en true
                            setState({
                                loading: false,
                                error: null,
                                //En vez de poner data: data, se puede abreviar poniendo
                                data
                            })
                        }else{
                            console.log('setState no se llamo')
                        }
                    })
                })

        return () => {}
    }, [ url ])
    
    //Retorno state que es el objeto con toda la info que se necesita
    return state;
}