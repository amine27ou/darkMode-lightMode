import React,{useState} from "react"
import "./App.css"

export default function Navbar(props){
    return(
        <nav className={props.isLight ?  "lightNavbar" : "darkNavbar"}>
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="right-col">
            <p>Light </p>
            <div className={`${props.isLight ? "cont" : "contClicked"}` } onClick={props.function}>
                <div className={`${props.isLight ? "circle" : "circleClicked"}` }></div>
            </div>
            <p>Dark</p>
            </div>
        </nav>
    )
}