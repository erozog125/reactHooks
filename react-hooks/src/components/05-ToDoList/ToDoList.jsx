import React, { useState } from 'react'
import { FaTimes} from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const ToDoList = () => {

  const [tasks, setTasks] = useState([])
  const [inputTask, setInputTask] = useState('')

  const taskInput = (event) => {
    setInputTask(event.target.value)
  }

  const addTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask])
      setInputTask('')
    }
  }

  const deleteTask = (i) => {
    const updatedTasks = tasks.filter((_, j) => j !== i)
    setTasks(updatedTasks)
  }

  const clearTasks = () => {
    setTasks([])
  }

  return (
    <>
      <section className='w-screen flex justify-evenly box-border'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl my-1 font-bold text-center text-green-400'>To Do List</h1>
          <textarea className='font-semibold placeholder: p-1 resize-none focus:outline-none border-none'
            id="" 
            value={inputTask}
            onChange={taskInput}
            cols="40" 
            rows="8" 
            placeholder='Ingresa la tarea'></textarea>
            <div className='flex justify-center'>
              <button className='p-1 mx-1 my-2 w-32 font-semibold bg-green-400' onClick={addTask}>Agregar tarea</button>
              <button className='py-1 px-2 mx-1 my-2 w-9 text-xl font-semibold bg-green-400' onClick={clearTasks}><FaTrashAlt /></button>
            </div>
        </div>
        <div className='h-80 w-96 object-cover overflow-hidden flex flex-col bg-white items-center'>
          <h2 className='text-2xl my-1 font-bold text-center text-green-400'>Tasks</h2>
          <div className="w-full flex overflow-x-hidden overflow-y-auto max-h-[300px]">
            <ul className='w-full'>
              {tasks.map((task, i) => (
                <li key={i} className='my-1 pl-1 pr-6 py-1 relative font-semibold bg-zinc-200 whitespace-pre-line break-words'>
                  {task}
                  <button className='m-1 absolute right-0 top-0 font-bold text-green-400'
                  onClick={() => deleteTask(i)}><FaTimes /></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
    
  )
}
