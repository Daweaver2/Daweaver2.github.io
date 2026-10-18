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
      <nav className="navbar" style={{ position: 'relative' }}>
        {/* <svg className="circuit-svg" width="100%" height="100%">
          <path 
            className="circuit-line-1" 
            d="M 120 60 H 170" 
          />
          <path 
            className="circuit-line-2" 
            d="M 170 60 L 210 90" 
          />
          <path 
            className="circuit-line-3" 
            d="M 170 60 L 210 30" 
          />
        </svg> */}
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