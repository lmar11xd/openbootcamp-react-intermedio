import React from 'react'
import { Contacto } from '../../models/contacto.class'
import ComponenteB from '../../pure/ComponenteB'

function ComponenteA(props) {
    const defaultContact = new Contacto('Francisco', 'García','fran@example.com', false);
  return (
    <div>
        <h1>Contacto</h1>
        <ComponenteB contacto={defaultContact}></ComponenteB>
    </div>
  )
}


export default ComponenteA
