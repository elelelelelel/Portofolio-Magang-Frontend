import React from 'react'
import { useHistory } from 'react-router'
import { ItemMenuNavigation } from '..'
import { ICCart, ICHistory, ICHome } from '../../../assets'
import { Gap } from '../../atoms'
import './MenuNav.css'

const MenuNav = ({ imgUser, nameUser, onClick }) => {
  const history = useHistory();
  return (
    <>
      <footer className="menu-nav">
        <div className="footer-icon">
          <ItemMenuNavigation icMenuNav={ICHome} titleMenuNav="Home" />
          <ItemMenuNavigation icMenuNav={ICHistory} titleMenuNav="History" onClick={() => history.push("/history")} />
          {/* <ItemMenuNavigation icMenuNav={ICCart} titleMenuNav="Cart" /> */}
        </div>
        <div className="footer-users" onClick={onClick}>
          <div className="wrapper-menu-users">
            <Gap width={12} />
            <img src={imgUser} alt="avatar" className="avatar" />
            <Gap width={11} />
            <h3>{nameUser}</h3>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MenuNav
