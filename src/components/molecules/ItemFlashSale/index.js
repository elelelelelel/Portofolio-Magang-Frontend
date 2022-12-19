import React from 'react'
import { DummyFlashSale, ICPitaOff } from '../../../assets'
import './ItemFlashSale.css'

const ItemFlashSale = () => {
  return (
    <div className="card-flas-sale">
      <img src={ICPitaOff} alt="pita-off" className="pita-off" />
      <div className="ic-item-flash-sale">
        <img src={DummyFlashSale} alt="DummyFlashSale" />
      </div>
      <div className="text-ket-flash-sale">
        <p>Rp 50.250</p>
        <h3>PULSA 50K</h3>
        <h4>Rp 45.000</h4>
      </div>
    </div>
  )
}

export default ItemFlashSale
