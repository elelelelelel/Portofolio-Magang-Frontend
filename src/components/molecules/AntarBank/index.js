import React from 'react'
import { ICTF } from '../../../assets'
import { Button } from '../../atoms'
import './AntarBank.css'

const AntarBank = () => {

  const testBtn = () => {
    alert('hh')
  }

  return (
    <div className="wrapper-an-bank">
      <img src={ICTF} alt="ictf" />
      <div className="transfer-an-bank">
        <div className="transfer-text">
          <h3>Transfer Antar Bank</h3>
          <h6>Fitur baru</h6>
        </div>
        <div>
          <Button className="btn-tf-kirim" title="KIRIM" onClick={testBtn} />
        </div>
      </div>
    </div>
  )
}

export default AntarBank
