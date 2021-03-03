import React from 'react'
import Button from './Button'

function Task({text, onDelete}) {


    return (
        <div className="task" >
            <p>{text.text}</p>
            <Button text="Delete" color="rgb(253, 75, 75)" onClick={() => onDelete(text.id)}/>
        </div>
    )
}

export default Task
