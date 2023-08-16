import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('black');

const txt = (valor) => setText(valor.target.value)

const handleInputKeyPress = (event) => {
  // if (event.key === 'Enter') {
  //   setColor('red')
  // }else {
  //   setColor('black')
  // }
  event.code === 'Enter' ? setColor('red') : setColor('black')
}


  return (
    <>
      <p className='m-4 text-2xl font-semibold text-black' style={{color}}>Texto ingresado: {text}</p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-blue-300 p-2  placeholder:text-gray-600 font-semibold'
        type="text"
        value={text}
        onChange={txt}
        onKeyUp={handleInputKeyPress}
      />    
    </>
    
  );
}
