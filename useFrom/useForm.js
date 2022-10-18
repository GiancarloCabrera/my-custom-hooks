import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState( initialState );

    //Funcion para limpiar el formulario
    const reset = () => {
        setValues( initialState );
    }

    //Como es un objeto y a mi solo me interesa el target, lo desestructuro
    const handleInputChange = ({ target }) => {
        //Llamamos el setFormState para actualizar el objeto con los nuevos cambios
        // del input
        setValues({
            ...values, //Uso el spread para guardar todas los valores en caso de
            // que no sean llamados

            //El target.name muestra que propiedad fue cambiada
            [target.name]: target.value 
                        //El target.value muestra el valor 
        })

        console.log(values);
    };

    //Retorno los estados de el objeto y la funcion
    return [ values, handleInputChange, reset ];

}