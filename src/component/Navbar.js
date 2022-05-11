import React from "react"
// import logo from "./img/react-logo" moved img folder to public until I find a fix
export default function Navbar() {
    return (
        <nav>
            <img src="../img/react-logo.png" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}