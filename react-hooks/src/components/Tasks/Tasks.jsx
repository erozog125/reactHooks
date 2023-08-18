import React, { useRef, useState } from 'react';

export const Tasks = () => {

    
    const [texts, useTexts] = useState('')
    const into = useRef(null)
    
    const array = [];
    const handleText = () => {
        
        const txt = into.current.value
        useTexts(txt)
        array.push(txt)
        const ul = document.querySelector('ul')
        const deleted = document.createElement('button')
        deleted.textContent = 'X'

        array.forEach((e) => {
            const li = document.createElement('li'); 
            
            li.textContent = e
            li.classList = 'm-5 bg-red-800'
            ul.appendChild(li)      
            ul.appendChild(deleted)
        })

        console.log(array);          
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1>Tasks</h1>
                <br />
                <textarea ref={into} name="task" id="task" cols="30" rows="10"></textarea>
                <br />
                <button onClick={handleText} className='bg-blue-600'>Add task</button>
            </div>
            <hr />
            <div className='bg-red-100'>
                <h1>Added Tasks</h1>
                <ul className='gap-5'>
                </ul>
            </div>
        </>
    )
}
