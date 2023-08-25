import React,{useEffect,useState, useTransition} from "react";

export const RockPaperScissors = () => {
  const option = ['rock', 'papper', 'scissors']

    const classButton = 'w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4'
    const [optionGame,setOptionGame] = useState('waiting');
    const [validation, setValidation] = useState('waiting')
    const [cpuState, setCpuState] = useState('waiting')

    const cpu = (()=>{
        const randomOption = Math.floor(Math.random()* option.length)
        setCpuState(option[randomOption])
    })

    useEffect (()=>{
        if(cpuState === 'rock' && optionGame === 'papper' || cpuState === 'scissors' && optionGame === 'rock' || cpuState === 'papper' && optionGame === 'scissors'){
            setValidation('gana')
        }else if (cpuState === 'papper' && optionGame === 'rock' || cpuState === 'rock' && optionGame === 'scissors' || cpuState === 'scissors' && optionGame === 'papper'){
            setValidation ('pierde')
        }else{
            setValidation('empate')
        }    
    })

    return (
    <>
        <p className="text-white">Piedra, Papel o Tijera</p>
        <p className="text-white">Usuario Eligio: {optionGame}</p>
        <p className="text-white">CPU choose: {cpuState}</p>
        <p className="text-white">Usuario {validation}</p>
        <button className={classButton} onClick={()=> setOptionGame('rock',cpu())}>Piedra</button>
        <button className={classButton} onClick={()=> setOptionGame('papper',cpu())}>Papel</button>
        <button className={classButton} onClick={()=> setOptionGame('scissors',cpu())}>Tijera</button>
    </>
  )
}
