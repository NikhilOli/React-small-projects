import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("");
    const handleInput = (e) => setTask(e.target.value);

    // const handleInput = () => {
    //     setTask(e)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask("");
    }
    console.log(task);
    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <div>
                    <input value={task} onChange={handleInput} type="text" placeholder='Enter New Todo' />
                    <button onClick={handleSubmit}>Add Todo</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Todo