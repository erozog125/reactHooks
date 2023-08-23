import React, { useEffect, useState } from 'react'

export const Counter = () => {

  const colorA = 'text-4xl text-sky-400'
  const colorB = 'text-4xl text-purple-600'

  const [count, setCount] = useState(0);
  const [style, setStyle] = useState(colorA);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 ? setCount(count - 1) : null;
  const reset = () => setCount(0)


  useEffect(() => {
    count >= 10 ? setStyle(colorB) : setStyle(colorA)
  }, [count])

  return (
    <>
      <p className={style}>Contador: {count}</p>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={increment}>Incrementar</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={decrement}>Decrement</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={reset}>Reset</button>
    </>

  )
}

