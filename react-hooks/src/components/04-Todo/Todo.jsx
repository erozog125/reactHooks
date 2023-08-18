import { useState } from 'react';

export const Todo = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const getTask = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        if (task !== '') {
            setTaskList(prevTask => [...prevTask, task]);
            setTask('');
        } else {
            alert('First write a task')
        }
    };

    const deleteTask = (i) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(i, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <div className=''>
            <h1 className='text-2xl font-black'>To-do List</h1>
            <textarea className='border-solid border-black border-2' onChange={getTask} value={task} cols="30" rows="10"></textarea> <br />
            <button className='bg-black text-white' onClick={addTask}>Add</button>
            <ul className='text-black'>
                {taskList.map((item, index) => (
                    <li className='grid grid-cols-2 w-40 gap-10 m-5' key={index}>
                        {item}
                        <button className='bg-red-600' onClick={() => deleteTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};