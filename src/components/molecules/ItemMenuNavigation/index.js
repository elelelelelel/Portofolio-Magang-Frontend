import React from 'react'
import { Gap } from '../../atoms'
import './ItemMenuNavigation.css'

const ItemMenuNavigation = ({ icMenuNav, titleMenuNav, onClick }) => {
  return (
    <div className="item-menu-nav" onClick={onClick}>
      <img src={icMenuNav} alt="ic-home" />
      <Gap height={4} />
      <h3>{titleMenuNav}</h3>
    </div>
  )
}

export default ItemMenuNavigation
