import React from 'react'
import './MenuItems.css'

const MenuItems = ({ IcMenu, titleMenu, onClick }) => {
  return (
    <div className="menu-items" onClick={onClick}>
      <img src={IcMenu} alt="icon-menu" />
      <h3>{titleMenu}</h3>
    </div>
  )
}

export default MenuItems
