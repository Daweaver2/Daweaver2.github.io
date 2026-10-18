import { useState } from 'react'
import picture from '../assets/ProfileCropped.jpg'
import './NavBar.css'

function Logo(){
  return(
  <>
    <img src= {picture} className="logo-img"></img>
  </>
  )
}

function NavBarT1() {
  return (
    <>
      <nav className="navbar">
        {/* <!-- Website Logo --> */}
        <div className="logo"><Logo/></div>
        
        {/* <!-- Navigation Links --> */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>

    </>
  )
}

export default NavBarT1;