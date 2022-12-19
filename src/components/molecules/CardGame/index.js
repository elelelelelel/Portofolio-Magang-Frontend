import React from 'react'
import { Gap } from '../../atoms'
import './CardGame.css'

const CardGame = (props) => {
    return (
        <div className="card-game" onClick={props.onClick}>
            <div className="left-content-game">
                <img src={props.logoGame} alt={props.altLogo} />
            </div>
            <div className="right-content-game">
                <Gap height={4} />
                <div className="mid-content-game">
                    <h3>{props.namaGame}</h3>
                </div>
            </div>
        </div>
    )
}

export default CardGame
