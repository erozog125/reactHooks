import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { Todo } from './components/04-Todo/Todo'

function App() {

  return (
    <div className='w-full bg-gray-600 flex flex-col justify-center items-center h-screen'>
      <Counter />
      {/* <InputText /> */}
      {/* <ToogleState /> */}
      {/* <Todo /> */}
    </div>
  )
}

export default App
