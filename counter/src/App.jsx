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
//  counter=counter+1;
//  setCounter(counter)
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)

// All 4 updates will be applied one after another, and the counter will increase by 4.
// So if the current value is 15, it will become: 👉 15 → 16 → 17 → 18 → 19
// This means:
// "Hey React, don't just overwrite the counter with a value.
// Instead, give me the latest value, and I’ll tell you how to update it.
// So each update will use the most up-to-date value, even if multiple setCounter() calls are stacked one after another.
// Why don't we need to declare prevCounter?
// prevCounter is just a parameter — like a function argument.
// React automatically passes the latest value of the state into that function.
// What if you wrote it like this instead?
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)
//  This won’t work the same. The counter will only go up by 1.
// Why? Because all 4 lines use the same old value of counter. React batches these updates and thinks:
// "Oh, you're telling me to set it to 16 four times? Cool, I’ll just do it once."
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
