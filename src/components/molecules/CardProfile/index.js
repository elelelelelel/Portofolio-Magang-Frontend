import React from 'react'
import { ICArrowRight } from '../../../assets/icon'
import './CardProfile.css'

const CardProfile = ({ icAccount, nameAccount, onClick, ...rest }) => {
  return (
    <div className="wrapper-card-profile" onClick={onClick} {...rest}>
      <div className="icon-card-profile">
        <img src={icAccount} alt="icon-card" />
      </div>
      <div className="text-card-profile">
        <div className="ket-card-profile">
          <h3>{nameAccount}</h3>
          <img src={ICArrowRight} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default CardProfile
