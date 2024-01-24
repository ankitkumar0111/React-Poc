import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <div>
         <img className='logo' src="https://www.dollargeneral.com/content/dam/dg/assets/header-navigation/desktoplogo.png" alt="logo-pic" />
         </div>
         <div className='navbar-div'>
         <ul>
          <li><a href='/home'>Home</a></li>
          <li><a href='/home'>Find Locations</a></li>
         </ul>
         </div>
    </div>
  )
}

export default Navbar
