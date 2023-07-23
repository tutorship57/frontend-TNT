import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About.tsx'

const data: string[] = ["a", "b", "c","z","0"];
function App() {
  const [count, setCount] = useState(0);
  //const [count,setCount] = useState<string>("");
  const [state,setState] = useState<string>("test");

  return (
   <div className='main'>
    <h1>hello react</h1>
    <About data={data} func={setState}/>
    <h1>{state}</h1>
    <input onChange={(text)=>{setState(state + text.target.value)}} />
    <button onClick={()=> setState("state set!")}></button>
    {
      data.map((item,idx)=>(
        < h4 key={idx}>{item}</h4>
    ))}
    {
      data.map((item,idx)=>{
        if(item === 'a'){
          return <h1 key={idx}>AAA</h1>
        } 
        return <h4 key={idx}>{item}</h4>
      })
    }

   </div>
  )
}

export default App
