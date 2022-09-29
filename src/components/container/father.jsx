import React, { useState } from 'react'
import Child from '../../pure/child'

function Father() {

    const [name, setName] = useState('Luis');

    function showMessage(text) {
        alert(`Message received: ${text} `)
    }

    function updateName(newName) {
        setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    )
}

export default Father