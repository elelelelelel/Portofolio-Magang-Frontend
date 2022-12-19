import React from 'react'
import { ICPLN, ICPointKamu } from '../../../assets'
import { Gap } from '../../atoms'
import './CardPLNPrabayar.css'

const CardPLNPrabayar = (props) => {
  return (
    <div className="card-pln-prabayar" onClick={props.onClick}>
      <div className="left-content-pln-prabayar">
        <img src={ICPLN} alt="ic-pln" />
      </div>
      <div className="right-content-pln-prabayar">
        <Gap height={9} />
        <div className="top-content-pln-prabayar">
          <img src={ICPointKamu} />
          <h3>{props.coin}</h3>
        </div>
        <Gap height={4} />
        <div className="mid-content-pln-prabayar">
          <h3>Token PLN {props.nameToken}rb</h3>
        </div>
        <Gap height={4} />
        <div className="bot-content-pln-prabayar">
          <span>Rp</span>
          <h3>{props.hargaToken}</h3>
        </div>
      </div>

    </div>
  )
}

export default CardPLNPrabayar
