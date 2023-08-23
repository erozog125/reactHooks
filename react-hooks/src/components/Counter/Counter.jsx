import React, { useEffect ,useState } from 'react'

export const Counter = () => {

  const ClasA = 'text-blue-600'
  const ClasB = 'text-purple-700'

  const [count, setCount] = useState(0);
  const [styleColor, setStyleColor] = useState(ClasA)

  useEffect(() => {
    if(count >= 10) {
      setStyleColor(ClasB);
    }else{
      setStyleColor(ClasA)
    }
  }),[count]
  


  return (
    <>
      <p className={styleColor}>Contador: {count}</p>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={() => setCount(count + 1)}>Incrementar</button>    
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={() => setCount(count - 1)}>Decrementar</button>    
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={() => setCount(0)}>Setear</button>    
    </>
    
  )
}

