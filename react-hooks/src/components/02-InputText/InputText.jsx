import React, { useState } from 'react';

export const InputText = () => {

  const [text, setText] = useState('');
  const [color, setColor] = useState('black');

  const txt = (valor) => setText(valor.target.value)

  const handleInputKeyPress = (event) => {
    console.log(event);
    if (event.code === 'Enter') {
      setColor('red')
    }else if (event.code === 'Backspace') {
      setColor('black')
    }
    // event.code === 'Enter' ? setColor('red') : setColor('black')
  }

  return (
    <>
      <div className='flex flex-col gap-2'>
        <p className='my-2 text-2xl font-semibold' style={{color}}>Texto ingresado: {text}</p>
        <input
          placeholder='Ingresa el texto'
          className='w-96 bg-blue-300 p-2  placeholder:text-gray-600 font-semibold'
          type="text"
          value={text}
          onChange={txt}
          onKeyUp={handleInputKeyPress}
        />
      </div>
    </>
    
  );
}
