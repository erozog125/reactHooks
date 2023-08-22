import { Counter } from "./components/01-Counter/Counter"
import { ConditionalColor } from "./components/04-ConditionalColor/ConditionalColor"
import { RockPaperScissor } from "./components/05-RockPaperScissors/RockPaperScissor"

function App() {
  
  return (
    <div className='w-full h-96 bg-zinc-700 flex flex-col justify-center items-center'>
      {/* <Counter />
      <ConditionalColor /> */}
      <RockPaperScissor />
    </div>
  )
}

export default App
