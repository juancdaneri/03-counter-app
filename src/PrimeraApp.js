/* import { Fragment } from "react"; */
import PropTypes from "prop-types";

/*
dos tipos de componentes, basados en clases y en funciones
(en funciones mas utilizado últimamente por los hooks) 
*/
const PrimeraApp = ( {saludo = 'valor predeterminado', subtitulo}  ) => {


    //si no tiene valor predeterminado
    if( !saludo ){
        throw new Error('saluda guachin')
    }

  
    const objeto = {
        nombre: 'Juan',
        edad: 32
    }

    const saludo1 = 'Hola, te saludo desde Javascript'

    
    return (

        <>
        <h1>hola, esto esta en componente de PrimeraApp</h1>
        <h3>{subtitulo}</h3>
        <p> {saludo1} </p>
        <p> esto es un objeto impreso desde js: {JSON.stringify(objeto)}</p>
        <p>{saludo}</p>
        </>
        
   )

}

//Limitando los tipos de las propiedades
PrimeraApp.defaultProps = { 
    subtitulo: 'soy un subitulo por defecto, mediante defaultProps',

}

PrimeraApp.propTypes = {
       saludo: PropTypes.string.isRequired
};
    
export default PrimeraApp;