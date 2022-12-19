import React, { useState } from 'react'
import { ICVerf } from '../../../assets'
import './FieldDetail.css'

const FieldDetailProfile = ({ ket, isi, ICDPVerf }) => {

  // const [isVerf, setIsVerf] = useState(true)
  return (
    <div className="field-detail-profile">
      <div className="d-ket">
        <h3>{ket}</h3>
      </div>
      <div className="d-isi">
        <img src={ICDPVerf} />
        <p>{isi}</p>
      </div>
    </div>
  )
}

export default FieldDetailProfile
