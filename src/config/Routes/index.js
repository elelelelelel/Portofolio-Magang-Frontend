import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  MainApp,
  Profile,
  ProfileDetail,
  TukarPoint,
  KetentuanPoint,
  TokenPLN,
  IsiPulsa,
  PDAM,
  PaketData,
  Voucher, 
  VoucherGame, 
  VoucherDetail,
  Ovo,
  Dana,
  PulsaSMS,
  History
} from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile-detail">
          <ProfileDetail />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/tukar-point">
          <TukarPoint />
        </Route>
        <Route path="/ketentuan-point">
          <KetentuanPoint />
        </Route>
        <Route path="/token-pln">
          <TokenPLN />
        </Route>
        <Route path="/isi-pulsa">
          <IsiPulsa />
        </Route>
        <Route path="/pdam">
          <PDAM />
        </Route>
        <Route path="/paket-data">
          <PaketData />
        </Route>
        <Route path="/voucher">
          <Voucher />
        </Route>
        <Route path="/voucherGame">
          <VoucherGame />
        </Route>
        <Route path="/voucherDetail">
          <VoucherDetail/>
        </Route>
        <Route path="/ovo">
          <Ovo />
        </Route>
        <Route path="/dana">
          <Dana />
        </Route>
        <Route path="/pulsaSMS">
          <PulsaSMS />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        {/* <Route path="/register">
          <Register />
        </Route> */}
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
