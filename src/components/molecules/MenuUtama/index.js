import React from 'react'
import { useHistory } from 'react-router'
import { MenuItems } from '..'
import { ICLSemua, ICPaketData, ICPDAM, ICPulsa, ICPulsaSMS, ICTokenPLN, ICVGame, ICVInternet } from '../../../assets'
import './MenuUtama.css'

const MenuUtama = () => {
  const history = useHistory();
  return (
    <div className="wrapper-menu-utama">
      <div className="wrapper-menu-utama-atas">
        <MenuItems titleMenu="Isi Pulsa" IcMenu={ICPulsa} onClick={() => history.push("/isi-pulsa")}/>
        <MenuItems titleMenu="Paket Data" IcMenu={ICPaketData} onClick={() => history.push("/paket-data")}/>
        <MenuItems titleMenu="Voucher Internet" IcMenu={ICVInternet} onClick={() => history.push("/voucher")}/>
        <MenuItems titleMenu="Token PLN" IcMenu={ICTokenPLN} onClick={() => history.push("/token-pln")} />
      </div>
      <div className="wrapper-menu-utama-bawah">
        <MenuItems titleMenu="Pulsa SMS" IcMenu={ICPulsaSMS} onClick={() => history.push("/pulsaSMS")} />
        <MenuItems titleMenu="PDAM" IcMenu={ICPDAM} onClick={() => history.push("/pdam")}/>
        <MenuItems titleMenu="Voucher Game" IcMenu={ICVGame} onClick={() => history.push("/voucherGame")} />
        <MenuItems titleMenu="Lihat Semua" IcMenu={ICLSemua} />
      </div>

    </div>
  )
}

export default MenuUtama
