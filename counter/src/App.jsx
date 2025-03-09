import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
let[counter,setCounter]=useState(15)
 // let counter=5;
const addValue=() =>{
  console.log("clicked",Math.random())
 //  counter=counter+1;
 if(counter<20){
 counter=counter+1;
 setCounter(counter)
 }
 else
 {
 let text=document.getElementById('advalue')
 text.innerHTML="Exceeded"
 }
}
const removeValue=()=>{
  if(counter>0)
  {
  setCounter(counter-1)
}}
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue} id="advalue">Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
