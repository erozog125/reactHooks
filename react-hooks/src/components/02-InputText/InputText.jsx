import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('text-4xl m-6 text-sky-500')

  const handleText = (event) => {
    setText(event.target.value)
  }
  
  const handleColor = (event) => {
    event.code === 'Enter' ? setColor('text-4xl m-6 text-green-700') : setColor('text-4xl m-6 text-sky-500')
  }

  return (
    <>
      <p className={color}>Texto ingresado: {text}</p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-2'
        type="text"
        onKeyUp={handleColor}
        onChange={handleText}
      />    
    </>
    
  );
}
