import React from 'react'
import { CardPromo } from '..'
import { DummyPromo1 } from '../../../assets'
import './Promo.css'

const Promo = () => {
  return (
    <div className="wrapper-promo-today">
      <div className="text-promo-today">
        <div className="left-text-promo-today">
          <h3>Promo Terbaru</h3>
        </div>
        <div className="right-text-promo-today">
          <h3>Lihat Semua</h3>
        </div>
      </div>
      <div className="wrapper-card-promo-today">
        <div className="card-promo-today">
          <CardPromo bgPromo={DummyPromo1} titlePromo="Kerja sama Link aja dengan bangbeli, Sekarang bisa isi saldo dengan Link Aja loh !!" />
          <CardPromo bgPromo={DummyPromo1} titlePromo="Kerja sama Link aja dengan bangbeli, Sekarang bisa isi saldo dengan Link Aja loh !!" />
          <CardPromo bgPromo={DummyPromo1} titlePromo="Kerja sama Link aja dengan bangbeli, Sekarang bisa isi saldo dengan Link Aja loh !!" />
          <CardPromo bgPromo={DummyPromo1} titlePromo="Kerja sama Link aja dengan bangbeli, Sekarang bisa isi saldo dengan Link Aja loh !!" />
        </div>
      </div>
    </div>
  )
}

export default Promo
