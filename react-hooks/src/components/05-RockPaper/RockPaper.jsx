import { useState } from 'react'

export const RockPaper = () => {
    const classA = 'text-red-600 text-4x1'
    const classB = 'text-green-600 text-4x1'
    const classC = 'text-blue-600 text-4x1'

    const [styleColor, setStyleColor] = useState('black');

    const [userChoice, setUserChoice] = useState('');
    const [cpuChoice, setCpuChoice] = useState('');
    const [result, setResult] = useState('');

    const choices = ['Piedra', 'Papel', 'Tijera'];

    const handleChoiceClick = (choice) => {
        setUserChoice(choice);
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomCpuChoice = choices[randomIndex];
        setCpuChoice(randomCpuChoice);

        if (choice === randomCpuChoice) {
            setResult('Empató');
            setStyleColor(classC);
        } else if (
            (choice === 'Piedra' && randomCpuChoice === 'Tijera') ||
            (choice === 'Papel' && randomCpuChoice === 'Piedra') ||
            (choice === 'Tijera' && randomCpuChoice === 'Papel')
        ) {
            setResult('Ganó');
            setStyleColor(classB);
        } else {
            setResult('Perdió');
            setStyleColor(classA);
        }
    };
    return (
        <div>
            <h1 className='text-3xl text-sky-600'>Piedra, papel o tijera</h1>

            <h2 className='text-2xl text-sky-600'>tu eleccion es: {userChoice}</h2>

            <h2 className='text-2xl text-sky-600'>cpu: {cpuChoice}</h2>

            <h2 className={`text-xl ${styleColor}`}>Usted: {result}</h2>

            <hr />
            <article className='flex gap-20 justify-center mt-4'>
                <button onClick={() => handleChoiceClick('Piedra')}>Piedra</button>
                <button onClick={() => handleChoiceClick('Papel')}>Papel</button>
                <button onClick={() => handleChoiceClick('Tijera')}>Tijera</button>
            </article>
        </div>
    )
}
