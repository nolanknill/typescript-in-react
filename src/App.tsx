import './App.css'
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      <Counter startCount={5} backgroundColor="lightsalmon" />
      <Counter startCount={0} backgroundColor="red" />
      <Counter startCount={100} backgroundColor="green" />
      <Counter startCount={-50} backgroundColor="orangered" />
    </>
    
  )
}

export default App
