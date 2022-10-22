import React, { useState, useEffect } from 'react'
import { Contact } from '../../models/contact.class'
import ContactForm from '../../pure/forms/contact-form';
import ContactComponent from '../../pure/contact';

//Importamos la hoja de estilos contact.scss
import '../../styles/contact.scss';

function ContactListComponent() {
    const defaultContact = new Contact('Pedro', '012-123432', false);
    const defaultContact2 = new Contact('María', '013-123432', false);
    const defaultContact3 = new Contact('Carlos', '014-123432', true);

    //Estado del componente
    const [contacts, setContacts] = useState([defaultContact, defaultContact2, defaultContact3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Contact State has been modified');
        setLoading(false);
        return () => {
            console.log('TaksList component is going to unmount...');
        }
    }, [contacts]);

    function connectContact(contact){
        console.log("Connect this Contact: ", contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function deleteContact(contact) {
        console.log("Delete this Contact: ", contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact) {
        console.log("Add this Contact: ", contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Contacts:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Phone</th>
                                    <th scope='col'>State</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>                            
                                { contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent 
                                            key={index} 
                                            contact={contact}
                                            connect={connectContact}
                                            remove={deleteContact}
                                        ></ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ContactForm add={addContact}></ContactForm>
            </div>
        </div>
    )
}

export default ContactListComponent
