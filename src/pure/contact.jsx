import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

import '../styles/contact.scss';

function ContactComponent({ contact, connect, remove }) {

  useEffect(() => {
    console.log('Contact created');
    return () => {
      console.log(`Taks: ${contact.name} is going to unmount`);
    }
  }, [contact]);

  function contactConnectBadge() {
    if (contact.connected) {
        return (
            <h6 className='mb-0'>
              <span className='badge bg-success'>Conectado</span>
            </h6>
          )
    } else {
        return (
            <h6 className='mb-0'>
              <span className='badge bg-danger'>Desconectado</span>
            </h6>
          )
    }
  }

  function contactConnectedIcon() {
    if(contact.connected) {
      return (<i onClick={() => connect(contact)} className='bi-toggle-on contact-action' style={{color:'green'}}></i>)
    }else{
      return (<i onClick={() => connect(contact)} className='bi-toggle-off contact-action' style={{color:'grey'}}></i>)
    }
  }

  return (
    <tr className='fw-normal'>
      <th><span className='ms-2'>{contact.name}</span></th>
      <td className='align-middle'><span className='ms-2'>{contact.phone}</span></td>
      <td className='align-middle'>
        { contactConnectBadge() }
      </td>
      <td className='align-middle'>
        { contactConnectedIcon() }
        <i className='bi-trash contact-action' style={{color: 'tomato', fontWeight: 'bold'}} onClick={() => remove(contact)}></i>
      </td>
    </tr>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent
