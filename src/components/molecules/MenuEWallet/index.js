import React from "react";
import "./MenuEWallet.css";

const MenuEwallet = ({ ICwallet, onClick }) => {
  return (
    <div className="menu-ewallet" onClick={onClick}>
      <img src={ICwallet} alt="logo-wallet" />
    </div>
  );
};

export default MenuEwallet;
