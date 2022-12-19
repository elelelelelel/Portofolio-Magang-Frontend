import React from 'react'
import { ICCS, ICPlus, ICPointKamu, ICWalletAccount } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './AccountTop.css'

const AccountTop = () => {
  return (
    <>
      <div className="wraper-account">
        <div className="saldo-account">
          <div className="saldo-ic">
            <img src={ICWalletAccount} alt="wallet" />
            <p>Saldo Akun</p>
          </div>
          <div className="saldo-nominal">
            <span>Rp</span>
            <h3>10.452.325</h3>
          </div>
        </div>
        <div className="cs">
          <div className="cs-ic">
            <img src={ICCS} alt="CS" />
          </div>
          <Gap height={16} />
          <div className="saldo-point">
            {/* <img src={IMGIsiSaldo} alt="ISI SALDO" /> */}
            <Button icLogo={ICPlus} title="ISI SALDO" />
            <Gap height={10} />
            <div className="point-kamu">
              <h3>Poin Kamu</h3>

              <img src={ICPointKamu} alt="INI POINT KAMU" />
              <h4>2040</h4>
            </div>
          </div>
        </div>
      </div>
      {/* <AlertPromo /> */}
    </>
  )
}

export default AccountTop
