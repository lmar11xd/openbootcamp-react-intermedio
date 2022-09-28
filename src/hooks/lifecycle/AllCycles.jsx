import React, {useEffect} from 'react'

function AllCycles() {

    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log('actualización del componente');
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        }
    },[]);

    return (
        <div>AllCycles</div>
    )
}

export default AllCycles