import React from 'react'
import { IMGLogoPLN } from '../../../../assets'
import { Gap } from '../../../atoms'
import style from '../BottomSheet.module.css'

const AlertConfirm = () => {
  return (
    <>
      <div className={style.switch_Line}></div>
      <div className={style.text_bs}>
        <h3>Tagihan</h3>
      </div>
      <div className={style.container_bs}>
        <div className={style.top_bs}>
          <div className={style.left_top_bs}>
            <h3>ID Pelanggan</h3>
            <h2>5167 0037 7155</h2>
            <h3>PLN postpaid - Electricity</h3>
            <h4>HENDRI, SE</h4>
          </div>
          <div className={style.right_top_bs}>
            <div className={style.logo_pln_bs}>
              <div></div>
              <img src={IMGLogoPLN} />
            </div>
            <div className={style.total_tagihan}>
              <h3>Total Tagihan</h3>
              <h2>Rp 75.100</h2>
            </div>
          </div>
        </div>
        <Gap height={12} />
        <hr />
        <Gap height={12} />
        <div className={style.bot_bs}>
          <Gap height={10} />
          <div className={style.jml}>
            <h3>Harga Tagihan</h3>
            <h3>Rp 72.600</h3>
          </div>
          <div className={style.jml}>
            <h3>Periode Tagihan</h3>
            <h3>Maret 2020</h3>
          </div>
          <div className={style.jml}>
            <h3>Denda</h3>
            <h3>Rp 0</h3>
          </div>
          <div className={style.jml}>
            <h3>Biaya Admin</h3>
            <h3>Rp 2.500</h3>
          </div>
          <div className={style.total}>
            <h3>Total</h3>
            <h3>Rp 75.100</h3>
          </div>
          <Gap height={15} />
        </div>
      </div>
      <Gap height={25} />
      <div className={style.method_bs}>
        <select name='takeation'>
          <option class='head'>Pilih Metode Pembayaran</option>
          <option value='Action 1'>Action 1</option>
          <option value='Action 2'>Action 2</option>
          <option value='Action 3'>Action 3</option>
          <option value='Action 3'>Action 3</option>
          <option value='Action 3'>Action 3</option>
          <option value='Action 3'>Action 3</option>
          <option value='Action 3'>Action 3</option>
          <option value='Action 3'>Action 3</option>
          <option value='Action 3'>Action 3</option>
        </select>
      </div>
      <Gap height={20} />
      <button className={style.btnBayar}>Bayar Sekarang</button>
    </>
  )
}

export default AlertConfirm


