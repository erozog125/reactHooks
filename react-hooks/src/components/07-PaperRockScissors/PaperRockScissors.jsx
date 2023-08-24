import { useState, useEffect } from 'react'

export const PaperRockScissors = () => {
  const classBtn = 'w-40 p-1 text-xl text-center hover:bg-green-400 text-white bg-gray-400 rounded font-semibold m-4'

  const options = ['piedra', 'papel', 'tijera']
  const [option, setOption] = useState('')

  const aleatory = options[Math.floor(Math.random() * options.length)]

  const results = ['usuario gana', 'usuario pierde', 'empate']
  const [result, setResult] = useState('')



  return (
    <>
      <div className='flex flex-col items-center gap-y-1'>
        <p className='text-4xl font-semibold text-green-700'>PIEDRA, PAPEL O TIJERA</p>
        <p className='text-3xl font-semibold text-white'>
          USUARIO: <span className='text-green-400'>{option}</span>
        </p>
        <p className='text-3xl font-semibold text-white'>
          CPU: <span className='text-green-400'>{aleatory}</span>
        </p>
        <hr className='w-64 my-2 border border-t-2 border-white' />
        <p className='text-3xl font-semibold text-white'>RESULTADO: </p>
        <div>
          <button className={classBtn} onClick={() => setOption(options[0])}>Piedra</button>
          <button className={classBtn} onClick={() => setOption(options[1])}>Papel</button>
          <button className={classBtn} onClick={() => setOption(options[2])}>Tijera</button>
        </div>
      </div>
    </>
  )
}
