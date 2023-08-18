import React, { useState, useRef } from 'react'

export const InputButton = () => {

  //INTENTAR HACER ESTOS EVENTOS USANDO 'useRef('')' Y EN VEZ
  // DE '.target' USAR '.current'

  const [newText, newSetText] = useState('')
  // const [textInput, setTextInput] = useState('')
  const input = useRef('')

  // const valueInput = (event) => {
  //   setTextInput(event.target.value);
  // }

  const btnClick = () => {
    // newSetText(textInput)
    // setTextInput('')
    const txt = input.current.value
    newSetText(txt)
  }

  return (
  <div className='flex flex-col gap-2'>
    <p className='my-2 text-2xl font-semibold text-black'>Texto: {newText}</p>
    <input
      placeholder='Ingresa el texto'
      className='w-96 bg-blue-300 p-2  placeholder:text-gray-600 font-semibold'
      type="text"
      ref={input}
      // onChange={valueInput}
    />
    <button className='p-2 text-base font-semibold text-zinc-700 bg-sky-600' 
      onClick={btnClick} >Enviar texto</button>
  </div>
  )
}
