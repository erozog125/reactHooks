import { useState } from "react"
import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { TodoList } from "./components/04-TodoList/TodoList"

function App() {

  const dark = 'w-full h-96 bg-zinc-700 flex flex-col justify-center items-center'
  const light = 'w-full h-96 bg-white flex flex-col justify-center items-center'

  const [isOn, setIsOn] = useState(false)
  
  return (
    <div className={ isOn ? dark : light }>
      <Counter />
      {/* <InputText />
      <button className='w-20 h-max rounded-full pointer-events-auto bg-slate-600 text-white' onClick={() => setIsOn(!isOn)}>{isOn ? 'Off' : 'On'}</button>
      <TodoList /> */}
    </div>
  )
}

export default App
