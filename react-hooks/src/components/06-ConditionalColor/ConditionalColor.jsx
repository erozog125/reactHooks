
import { useState, useEffect } from 'react'

export const ConditionalColor = () => {
  const class1 = 'm-3 text-green-400 text-4xl font-semibold'
  const class2 = 'm-3 text-orange-400 text-4xl font-semibold'

  const classBtn = 'w-40 p-2 text-xl text-center hover:bg-orange-400 text-white bg-gray-400 rounded font-semibold rounded-2xl m-4'

  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState(class1)

  useEffect(() => {
    if (counter >= 10) {
      setColor(class2)
    }else {
      setColor(class1)
    }
  }, [counter])

  return (
    <>
    <div className='flex flex-col items-center'>
      <p className={color}>Contador: {counter}</p>
        <div className='flex' id='btns'>
          <button className={classBtn} onClick={() => setCounter(counter+1)}>Incrementar</button>
          <button className={classBtn} onClick={() => setCounter(counter-1)}>Decrementar</button>
          <button className={classBtn} onClick={() => setCounter(0)}>Resetear</button>
        </div>
    </div>
    </>
    
  )
}
