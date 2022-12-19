import React from 'react'
import './MainApp.css'
import { bgTop, DummyUsers } from '../../assets'
import { AccountTop, AlertPromo, AntarBank, EWalletPasca, FlashSale, Gap, MenuNav, MenuUtama, Promo } from '../../components'
import { useHistory } from 'react-router'

const MainApp = () => {
  const history = useHistory();
  return (
    <div className="page">
      <AccountTop />
      <img src={bgTop} alt="bg" className="img-bg-top" />
      <Gap height={16} />
      <AlertPromo />
      <Gap height={16} />
      <AntarBank />
      <Gap height={16} />
      <MenuUtama />
      <Gap height={16} />
      <EWalletPasca />
      <Gap height={16} />
      <FlashSale />
      <Gap height={50} />
      <Promo />
      <Gap height={16} />
      <MenuNav imgUser={DummyUsers} nameUser=" Hai Decky Ilham Syahputra" onClick={() => history.push("/profile")} />
      {/* <h3>MainApp pages</h3> */}
    </div>
  )
}

export default MainApp
