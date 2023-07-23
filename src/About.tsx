import React from 'react'

type Props = {
    data:string[]
    func: React.Dispatch<React.SetStateAction<string>>
}

const About = ({data,func}: Props) => {
  return <div>
    <h1>about</h1>
    <button onClick={()=> func("SO Hard!")}>click me</button>
    {data.map((item,idx)=>(
        <h4 key={idx}>{item}</h4>
    ))}
    </div>
  
}
export default About
// shortcut tsrafc 