import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskForm from '../../pure/forms/task-form';
import TaskComponent from '../../pure/task';

//Importamos la hoja de estilos task.scss
import '../../styles/task.scss';

function TaskListComponent() {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.BLOCKING);
    const defaultTask2 = new Task('Example 2', 'Default description 2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Default description 3', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaksList component is going to unmount...');
        }
    }, [tasks]);

    function completeTask(task){
        console.log("Complete this Task: ", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasksand it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log("Delete this Task: ", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log("Add this Task: ", task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>                            
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={index} 
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}
                                        ></TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <TaskForm add={addTask}></TaskForm>
            </div>
        </div>
    )
}

export default TaskListComponent
