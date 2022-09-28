/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */
import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado en el DOM');
    }

    render(){
        return (
            <div>DidUpdate</div>
        )
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado en el DOM');
    }, []);

    return (
        <div>DidUpdate</div>
    )
}
