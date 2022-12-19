import React from "react";
import { useHistory } from "react-router";
import { MenuEwallet } from "..";
import { ICDana, ICGopay, ICLinkAja, ICOvo, ICShopee } from "../../../assets";
import { Gap } from "../../atoms";
import "./EwalletPasca.css";

const EWalletPasca = () => {
  const history = useHistory();
  return (
    <div className="wrapper-pascabayar-page">
      <h3>E-Wallet & Pascabayar</h3>
      <Gap height={13} />
      <div className="wrapper-pascabayar">
        <div className="wrapper-menu-ewallet">
          <MenuEwallet ICwallet={ICOvo} onClick={() => history.push("/ovo")} />
          <MenuEwallet
            ICwallet={ICDana}
            onClick={() => history.push("/dana")}
          />
          <MenuEwallet ICwallet={ICShopee} />
          <MenuEwallet ICwallet={ICLinkAja} />
          <MenuEwallet ICwallet={ICOvo} />
          <MenuEwallet ICwallet={ICGopay} />
        </div>
      </div>
    </div>
  );
};

export default EWalletPasca;
