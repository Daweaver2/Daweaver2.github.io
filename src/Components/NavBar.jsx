import { useState } from 'react'

function NavBarT1() {
  return (
    <>
      <nav class="navbar">
        {/* <!-- Website Logo --> */}
        <div class="logo">MyWebsite</div>
        
        {/* <!-- Navigation Links --> */}
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

    </>
  )
}

export default NavBarT1;