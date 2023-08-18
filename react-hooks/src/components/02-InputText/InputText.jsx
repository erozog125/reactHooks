import React, { useRef, useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('text-white')

  const handleColor = (event) => {
    event.code == 'Enter' ? setColor('text-purple-400') : setColor('text-red-200') 
  }

  const [texts, useTexts] = useState('')
  const into = useRef(null)

  const handleText = () => {
   const txt = into.current.value
   useTexts(txt)
  }

  return (
    <>
      {/* <p className={color}>Texto ingresado: {text}</p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-4'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleColor}
      />     */}

      <div>
        <input ref={into} type="text" />
        <p>{texts}</p>
        <button onClick={handleText}>Click</button>
      </div>
    </>
    
  );
}
