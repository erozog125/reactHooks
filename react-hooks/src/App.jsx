import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { InputButton } from "./components/04-InputButton/InputButton"
import { ToDoList } from "./components/05-ToDoList/ToDoList"
import { ConditionalColor } from "./components/06-ConditionalColor/ConditionalColor";
import { PaperRockScissors } from "./components/07-PaperRockScissors/PaperRockScissors";

function App() {
  
  return (
    <div className='w-full h-screen bg-zinc-700 flex justify-around items-center'>
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <ToogleState /> */}
      {/* <InputButton /> */}
      {/* <ToDoList /> */}
      {/* {<ConditionalColor />} */}
      <PaperRockScissors/>
    </div>
  )
}

export default App
