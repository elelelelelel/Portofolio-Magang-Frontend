import React from 'react'
import { Gap } from '../../atoms'
import './CardPDAM.css'

const CardPDAM = (props) => {
  return (
    <div className="card-pdam" onClick={props.onSelect} selected={props.selected}>
      <div className="right-content-pdam">
        <Gap height={9} />
        <Gap height={4} />
        <div className="mid-content-pdam">
          <h3>{props.daerahPDAM}</h3>
        </div>
        <Gap height={4} />
        <div className="bot-content-pdam">
          <h3>{props.kantorPDAM}</h3>
        </div>
      </div>

    </div>
  )
}

export default CardPDAM
