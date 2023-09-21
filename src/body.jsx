import React from "react"
import "./App.css"

export default function Body(props){
    const DarkSt ={
        position: "absolute",
        right: "0",
        zIndex: "1",
        opacity: "0.1"
    }
    const LightSt ={
        position: "absolute",
        right: "0",
        zIndex: "-1",
        opacity: "1"        
    }
    return(
        <div id="container" className={props.isLight ?  "lightBody" : "darkBody" }>
            <img
                src="./images/reactjs-icon-2.png"
                style={props.isLight ?  LightSt  :  DarkSt }
                alt=""
            />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars onn github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}