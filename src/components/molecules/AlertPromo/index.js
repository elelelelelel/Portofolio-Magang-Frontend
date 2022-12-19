import React from 'react'
import './AlertPromo.css'
import { ICPromo } from '../../../assets'

const AlertPromo = () => {
  return (
    <div className="wrapper-alert-promo">
      <img src={ICPromo} alt="Promo" />
      <p>Harga telkomsel TURUN || Indosat Makin Mu</p>
    </div>
  )
}

export default AlertPromo
