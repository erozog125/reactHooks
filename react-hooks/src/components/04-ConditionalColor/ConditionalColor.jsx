import React, { useEffect, useState } from 'react'

export const ConditionalColor = () => {

  const classA = 'text-blue-600 text-4xl'
  const classB = 'text-green-600 text-4xl'
  const classButton = 'w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4'
  
  const [counter, setCounter] = useState(0)
  const [styleColor, setStyleColor] = useState(classA)

  useEffect(()=> counter >= 10 ? setStyleColor(classB):setStyleColor(classA),[counter])


  return (
    <>
      <div className="w-full h-96 bg-zinc-700 flex flex-col justify-center items-center">
      <h2 className={styleColor} >State:{counter}</h2>
      <div className=''>
        <button className={classButton} onClick={()=>setCounter(counter + 1)}>increment</button>
        <button className={classButton} onClick={()=>setCounter(counter - 1)}>decrement</button>
        <button className={classButton} onClick={()=>setCounter(0)}>Reset</button>
      </div>
      </div>
    </>
  )
}
