import React, {useState} from 'react';
import Task from './Task';

function AddTask({onAdd}) {
    const [text, setText] = useState("")
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("Please Enter something")
            return
        }
        onAdd({text})
        
        setText("");
    }
    return (
        <form className="add-task" onSubmit={onSubmit} >
            <div><input type="text"  onChange={(e) => setText(e.target.value)} /></div>
            <input type="submit" value="Save" className="btn"/>
        </form>
    )
}

export default AddTask
