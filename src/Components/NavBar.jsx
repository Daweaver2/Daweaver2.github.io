import { useState } from 'react'
import picture from '../assets/ProfileCropped.jpg'
import { Link } from 'react-router-dom'
import './NavBar.css'

function Logo(){
  return(
  <>
    <img src= {picture} className="logo-img"></img>
  </>
  )
}

function Btn1(props){
  return(
    <>
     <button className="btn1"> {props.text} </button>
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
          <li>
            <Link to="/">
              <Btn1 text="Home"/>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Btn1 text="About Me"/>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <Btn1 text="Portfolio"/>
            </Link>
          </li>
          <li>
            <Link to="/resume">
              <Btn1 text="Resume"/>
            </Link>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default NavBarT1;