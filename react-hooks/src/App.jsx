import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'

function App() {
  
  return (
    <div className='w-full h-96 bg-zinc-700 flex justify-around items-center'>
      {/* <Counter /> */}
      <InputText />
      {/* <ToogleState /> */}
    </div>
  )
}

export default App
