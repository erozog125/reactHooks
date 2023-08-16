import React, { useRef, useState, useEffect } from 'react'
import { Messages } from '../Messages/Messages'
let tasksList = []

export const TodoList = () => {
  const TA = useRef('')
  const [tasks, setTasks] = useState([])
  const [styleMsg, setStyleMsg] = useState('w-60 flex justify-between bg-sky-500 p-4 m-4 visible')

  const handleTask = () => {
    const currentTask = TA.current.value
    // spread operator
    tasksList = [...tasksList,currentTask]
    setTasks(tasksList)
    localStorage.setItem('tasks',tasksList)
  }

  const handleClose = (event) => {
     setStyleMsg('w-60 flex justify-between bg-sky-500 p-4 m-4 hidden')
  }
    
  return (
    <>
      <div className='w-full h-auto bg-gray-500 flex flex-col items-center'>
        <h2 className='text-2xl m-2 text-yellow-500'>ToDoList</h2>
        <textarea placeholder="What's your task?" className='p-2 rounded-sm w-60 h-24' ref={TA} name="" id="" cols="30" rows="10"></textarea>
        <button className='w-48 bg-green-500 m-4 cursor-pointer hover:bg-green-900 text-white' onClick={handleTask}>Create Task</button>        
      </div>    
    <ul>
      { tasks.map( (task, idx) => <Messages style={styleMsg} key={idx} msg={task} eventHandle={handleClose} /> ) }
    </ul>
    </>
  )
}
