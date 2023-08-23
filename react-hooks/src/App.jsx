import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { Task } from "./components/Tasks/Tasks"

function App() {
  
  return (
    <div className='w-full h-auto bg-zinc-700 flex flex-col justify-center items-center'>
      <Task/>
    </div>
  )
}

export default App
