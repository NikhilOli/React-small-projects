import React, { useState } from 'react';

const Todo = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInput = (e) => setTask(e.target.value);

    const generateId = () => {
        return Date.now();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            setTodos((prevTodos) => [
                ...prevTodos,
                {
                    id: generateId(),
                    todo: task
                }
            ]);
            setTask("")
        }

        return (
            <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
                <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
                <div className="flex items-center">
                    <input
                        className="flex-1 py-2 px-4 border border-gray-300 rounded mr-2 focus:outline-none focus:border-blue-500"
                        value={task}
                        onChange={handleInput}
                        type="text"
                        placeholder='Enter New Todo'
                    />
                    <button
                        className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                        onClick={handleSubmit}
                    >
                        Add Todo
                    </button>
                </div>
                <div className="mt-4">
                    {todos.map(({ id, todo }) => (
                        <div key={id} className='flex justify-between items-center bg-gray-100 py-2 px-4 border border-gray-300 rounded'>
                            <p className="flex-1">{todo}</p>
                            <h4 className="text-red-500 font-bold cursor-pointer">X</h4>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default Todo;
