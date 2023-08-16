import React, { useState } from 'react'

export const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0)

  return (
    <>
      <p className='text-4xl text-sky-400'>Contador: {count}</p>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={increment}>Incrementar</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={decrement}>Decrement</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={reset}>Reset</button>
    </>

  )
}

