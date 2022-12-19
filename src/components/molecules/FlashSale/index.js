import React from 'react'
import { ItemFlashSale } from '..'
import { ICFlash, IMGBgFlashSale3 } from '../../../assets'
import { Gap } from '../../atoms'
import './FlashSale.css'

const FlashSale = () => {
  return (
    <>
      <img src={IMGBgFlashSale3} alt="bg-flash" className="bg-flash-sale" />
      <div className="wrapper-flash-sale">
        <Gap height={10} />
        <div className="text-flash-sale">
          <div className="left-flash-sale">
            <h3>Flash<span><img src={ICFlash} alt="ic-flash" /></span>Sale</h3>
            {/* <div>
              01 / 02 / 03
            </div> */}
          </div>
          <div className="right-flash-sale">
            <h4>Lihat Semua</h4>
          </div>
        </div>
        <Gap height={13} />
        <div className="wrapper-card-flash-sale">
          <div className="card-flash-sale">
            <ItemFlashSale />
            <ItemFlashSale />
            <ItemFlashSale />
            <ItemFlashSale />
          </div>
        </div>
      </div>
    </>
  )
}

export default FlashSale
