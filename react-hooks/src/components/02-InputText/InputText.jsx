import React, { useState } from 'react';

export const InputText = () => {


  const [style, setStyle] = useState('w-96 bg-sky-300 p-2')

  const [text, setText] = useState('');

  const newColor = 'w-96 text-black bg-purple-600 p-2'

  const handleEnter = (e) => {
    e.code === "Enter" ? setStyle(newColor) : null;
  }

  const [message, setMessage] = useState()
  const [tempMessage, setTempMessage] = useState('');

  const getMessage = (e) => {
    setTempMessage(e.target.value)
  }

  const showMessage = () => setMessage(tempMessage)


  return (
    <>
      <div>
        <p className={style}>Texto ingresado: {text}</p>
        <input
          placeholder='Ingresa el texto'
          className={style}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={handleEnter}
        />
      </div>
      <div className='p-10'>
        <input
          type="text"
          value={tempMessage}
          onChange={getMessage}
        />
        <p>su texto es: {message}</p>
        <button onClick={showMessage}>Click</button>
      </div>
    </>
  );
}