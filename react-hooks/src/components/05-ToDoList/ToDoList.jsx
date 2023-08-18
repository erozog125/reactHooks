import React, { useState } from 'react'

  export const ToDoList = () => {

  const [text, setText] = useState('')

  const sendTxt = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-2xl my-1 font-semibold text-center text-sky-400'>To Do List</h1>
        <textarea className='h- placeholder: p-1 resize-none'
          id="" 
          value={text}
          onChange={sendTxt}
          cols="30" 
          rows="6" 
          placeholder='Ingresa la tarea'></textarea>
        <button className='p-1 my-1 font-semibold bg-orange-400'
          // onClick={sendTxt}
          >Enviar tarea</button>
        <ul className=''>
          <li>{text}</li>
        </ul>
      </div>
    </>
    
  )
}
