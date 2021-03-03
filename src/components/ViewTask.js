import React from 'react';
import AddTask from './AddTask';
import {useState} from 'react'
import Task from './Task'

function ViewTask() {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text:"Tommy"
        },
        {
            id:2,
            text: "I am going to sleep"
        }

    ])

    const addTask = (task) => {
        const id = Math.floor(Math.random()*1000 + 1);
        console.log(task)
        const newTask = {id, ...task};
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        setTasks(
            tasks.filter((task) => task.id != id)
        )
    }

    return (
        <div className="App">
            <h1>To Do App</h1>
            <AddTask onAdd={addTask} /> 

            <div className="view-task">
                {tasks.map((task, index) => {
                return(
                    <Task key={index} text={task} onDelete={deleteTask}/>
                    ) 
                }) }
            </div>
        </div>
    )
}

export default ViewTask