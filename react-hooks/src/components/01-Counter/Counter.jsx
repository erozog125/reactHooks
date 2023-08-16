import React, { useState } from 'react'

export const Counter = () => {

  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count+1)
  const decrement = () => setCount(count-1)
  const reset = () => setCount(0)

  return (
    <>
      <p className='text-4xl py-3.5 text-sky-400'>Contador: {count}</p>
        <div className='flex' id='btns'>
          <button className='w-40 py-2.5 text-center text-sky-700 bg-gray-400 text-xl rounded-2xl m-6' onClick={handleAdd}>Incrementar</button>
          <button className='w-40 py-2.5 text-center text-sky-700 bg-gray-400 text-xl rounded-2xl m-6' onClick={decrement}>Decrementar</button>
          <button className='w-40 py-2.5 text-center text-sky-700 bg-gray-400 text-xl rounded-2xl m-6' onClick={reset}>Resetear</button>
        </div>
    </>
    
  )
}

