import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('black');

const txt = (valor) => setText(valor.target.value)

const handleInputKeyPress = (event) => {
  event.code === 'Enter' ? setColor('red') : setColor('black')
}

const [newText, newSetText] = useState('')
// const [btn, ]

const newTxt = (e) => newSetText(e.target.value)

  return (
    <>
      <div>
        <p className='m-4 text-2xl font-semibold text-black' style={{color}}>Texto ingresado: {text}</p>
        <input
          placeholder='Ingresa el texto'
          className='w-96 bg-blue-300 p-2  placeholder:text-gray-600 font-semibold'
          type="text"
          value={text}
          onChange={txt}
          onKeyUp={handleInputKeyPress}
        />
      </div>
      <div>
        <p className='m-4 text-2xl font-semibold text-black' style={{color}}>Texto a cambiar: {newText}</p>
        <input
          placeholder='Ingresa el texto'
          className='w-96 bg-blue-300 p-2  placeholder:text-gray-600 font-semibold'
          type="text"
          value={newText}
          onClick={newTxt}
          onKeyUp={handleInputKeyPress}
          ont
        />
        {/* <button value={}>Enviar texto</button> */}
      </div>
    </>
    
  );
}
