import React from 'react'
import { Gap } from '../../atoms'
import './CardPromo.css'

const CardPromo = ({ bgPromo, titlePromo }) => {
  return (
    <div className="card-promo">
      <img src={bgPromo} alt="img-promo" />
      <Gap height={15} />
      <div className="text-card-promo">
        <h3>{titlePromo}</h3>
      </div>
    </div>
  )
}

export default CardPromo
