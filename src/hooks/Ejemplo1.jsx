/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */
import React, { useState } from 'react'

function Ejemplo1() {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para un persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@yahoo.es'
    }

    /**
     * Queremos que el valorInicial personaInicial sean
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre: 'Pepe',
            email: 'pepe@gmail.com'
        })
    }

  return (
    <div>
        <h1>*** Ejemplo de useState() ***</h1>
        <h2>CONTADOR: {contador}</h2>
        <h2>DATOS DE LA PERSONA:</h2>
        <h3>NOMBRE: {persona.nombre}</h3>
        <h3>EMAIL: {persona.email}</h3>
        {/* Bloque de botones para actualizar el estado del componente */}
        <div>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    </div>
  )
}

export default Ejemplo1
