import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ 
        username: 'strider2',
        email: 'alvaradosteven6@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            //desestructurar 
            ...formState,
            [ name ]: value // laves computadas
        });
    }

    // useEffect sirve para enviar efectos secundarios
    // Siempre debe de tener una dependencia esta le dira la razón por la cuál se está haciendo los 
    // efectos en la programación
    // [] sólo se ejecuta una vez
    useEffect( () => {
        //console.log('useEffect called')
    }, [] );

    // Un useEffect separado para cada distinta funcionalidad
    useEffect( () => {
        //console.log('formState changed')
    }, [formState] );

    useEffect( () => {
        //console.log('email changed')
    }, [email] );



  return (
    <>
    
    <h1>Formulario Simple</h1>
    <hr />

    <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
    />

    <input
        type="text"
        className="form-control mt-2"
        placeholder="alvaradosteven6@gmail.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
    />

    {
        (username === 'strider2') && <Message/>
    }

    </>
  )
}
