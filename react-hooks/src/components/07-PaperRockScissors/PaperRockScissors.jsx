import { useState, useEffect } from 'react'

export const PaperRockScissors = () => {
  const classBtn = 'w-40 p-1 text-2xl text-center hover:bg-white text-emerald-700 bg-gray-400 rounded font-bold m-4'

  const options = ['piedra', 'papel', 'tijera']
  const results = ['usuario gana', 'usuario pierde', 'empate']

  const [option, setOption] = useState('')
  const [optionCpu, setOptionCpu] = useState('')
  const [result, setResult] = useState('')

  const aleatory = options[Math.floor(Math.random() * options.length)]

  useEffect(() => {
    if (option) {
      setOptionCpu(aleatory)

      if (option == aleatory) {
        setResult(results[2])
      } else if ((option == 'piedra' && aleatory == 'tijera') || (option == 'papel' && aleatory == 'piedra') || (option == 'tijera' && aleatory == 'papel')) {
        setResult(results[0])
      } else {
        setResult(results[1])
      }
    }
  }, [option])


  return (
    <>
      <section className='flex flex-col items-center gap-y-1'>
        <p className='my-10 text-5xl font-bold text-emerald-700'>PIEDRA, PAPEL O TIJERA</p>
        <p className=' text-3xl font-bold text-white'>
          USUARIO: <span className='ml-6 text-lime-400'>{option}</span>
        </p>
        <p className=' text-3xl font-bold text-white'>
          CPU: <span className='ml-6 text-lime-400'>{optionCpu}</span>
        </p>
        <hr className='w-96 my-2 border border-t-2 border-gray-400' />
        <p className=' text-3xl font-bold text-white'>
          RESULTADO: <span className='ml-6 text-lime-400'>{result}</span>
        </p>
        <div className='my-2'>
          <button className={classBtn} onClick={() => setOption(options[0])}>Piedra</button>
          <button className={classBtn} onClick={() => setOption(options[1])}>Papel</button>
          <button className={classBtn} onClick={() => setOption(options[2])}>Tijera</button>
        </div>
      </section>
    </>
  )
}
