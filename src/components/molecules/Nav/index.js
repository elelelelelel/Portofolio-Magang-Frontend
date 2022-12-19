import React from 'react'
import { ICArrowBackNav } from '../../../assets'
import './Nav.css'

const NavBar = ({ nameNav, onClick }) => {
  return (
    <nav className="nav-bar-bang-beli">
      <img src={ICArrowBackNav} alt="ic-arrow-back" onClick={onClick} />
      <h3>{nameNav}</h3>
    </nav>
  )
}

export default NavBar
