import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');

  return (
    <>
      <p>Texto ingresado: {text}</p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-2'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />    
    </>
    
  );
}
