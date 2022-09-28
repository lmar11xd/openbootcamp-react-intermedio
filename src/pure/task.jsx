import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../models/task.class'

//Importamos la hoja de estilos task.scss
import '../styles/task.scss';

function TaskComponent({ task }) {

  useEffect(() => {
    console.log('Tarea creada');
    return () => {
      console.log(`Taks: {task.name} is going to unmount`);
    }
  }, [task]);

  return (
    <div>
        <h2 className='task-name'>Nombre: { task.name }</h2>
        <h3>Descripción: { task.description }</h3>
        <h4>Level: { task.level }</h4>
        <h5>
            This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
        </h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
