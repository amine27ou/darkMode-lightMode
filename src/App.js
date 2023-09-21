import React,{useState} from 'react'
import "./App.css"
import Navbar from "./navbar"
import Body from './body'

export default function App() {
    const [isLight , setIsLight] = useState(true)
    function handleClick(){
        setIsLight(prevState=>!prevState)
    }
  return (
    <div className="App">
        <Navbar function={handleClick} isLight={isLight}/> 
        <Body  isLight={isLight}/>
    </div>
  )
}

