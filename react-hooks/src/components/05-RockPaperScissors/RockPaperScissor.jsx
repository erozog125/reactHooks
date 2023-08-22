import React, { useRef, useState, useEffect } from 'react'

export const RockPaperScissor = () => {

  const btn1 = useRef()
  const btn2 = useRef()
  const btn3 = useRef()

  const rock = 1
  const paper = 2
  const scissor = 3
  
  const getRandom = (min,max) => Math.round(Math.random() * (max - min) + min)
  
  const [numberUser, setNumberUser] = useState(0)
  const [numberCPU, setNumberCPU] = useState('')
  const [turnUser, setTurnUser] = useState('')
  const [turnCPU, setTurnCPU] = useState(0)
  const [result, setResult] = useState('resultado')
  
  const chooseRock = () => setNumberUser(1)
  const choosePaper = () => setNumberUser(2)
  const chooseScissor = () => setNumberUser(3)

  useEffect(() => {

    setNumberCPU(getRandom(1,3))
    console.log(numberUser);
    console.log(numberCPU);

    switch (numberUser) {
      case 1: setTurnUser('Piedra')
        break;
      case 2: setTurnUser('Papel')
        break;
      case 3: setTurnUser('Tijera')
        break;
      default:
        setTurnUser('Waitting...');
    }
    switch (numberCPU) {
      case 1: setTurnCPU('Piedra')
        break;
      case 2: setTurnCPU('Papel')
        break;
      case 3: setTurnCPU('Tijera')
        break;
      default:
        setTurnUser('Waitting...');
    }

    if (numberCPU === numberUser) {
      setResult('Empate')
    } else if ((numberUser === rock && numberCPU === scissor) || (numberUser === paper && numberCPU === rock) || (numberUser === scissor && numberCPU === paper)) {
      setResult('Usuario Gana')
    } else if ((numberUser === rock && numberCPU === paper) || (numberUser === paper && numberCPU === scissor) || (numberUser === scissor && numberCPU === rock)) {
      setResult('Usuario Pierde')
    } else {
      setResult('waitting...')
    }
  }, [numberUser,numberCPU])
  

  const classButton = 'w-32 text-xl bg-sky-700 text-white m-4 hover:text-green-400 hover:bg-slate-600 focus:text-green-400 focus:bg-slate-600'
  return (
    <div className='w-full flex flex-col items-center justify-center text-4xl text-sky-600'>
      <h2>Piedra, papel o Tijera</h2>
      <p>Usuario eligió:<span className='mx-4 text-white font-bold'>{turnUser}</span></p>
      <p className='text-red-700 font-semibold text-3xl'>CPU Chose:<span className='mx-4 font-bold'>{turnCPU}</span></p>
      <h3 className='border-t-2 mt-4 text-sky-500'>{result}</h3>
      <div className='mt-4 w-full flex justify-center'>
        <button ref={btn1} className={classButton} onClick={chooseRock}>Piedra</button>
        <button ref={btn2} className={classButton} onClick={choosePaper}>Papel</button>
        <button ref={btn3} className={classButton} onClick={chooseScissor}>Tijera</button>
      </div>
    </div>
  )
}
