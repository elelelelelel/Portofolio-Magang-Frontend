import React, { useState } from 'react'
import styled from 'styled-components'
import { ICNotVerf, ICPlus, ICVerf, ICWalletAccount } from '../../assets'
import { NavBar, Gap, Button, FieldDetailProfile } from '../../components'
import { useHistory } from "react-router-dom"

const ProfileDetail = () => {

  const [isVerf, setIsVerf] = useState(true)
  const history = useHistory();


  return (
    <>
      <PageProfileDetail>
        <NavBar nameNav="Profile" onClick={() => history.goBack()} />
        {/* <Gap height={50} /> */}
        <HeadProfileDetail>
          <LeftHeadProfile>
            <WalletSaldo>
              <img src={ICWalletAccount} alt="ic-wallet" />
              <h3>Saldo Akun</h3>
            </WalletSaldo>
            <NominalSaldo>
              <span>Rp</span>
              <h3>2.000.320</h3>
            </NominalSaldo>
          </LeftHeadProfile>
          <RightHeadProfile>
            <div>
              <Button icLogo={ICPlus} title="ISI SALDO" />
            </div>
          </RightHeadProfile>
        </HeadProfileDetail>
        <ContainerDetail>
          <FieldDetailProfile ket="Nama Lengkap" isi="Decky Ilham Syahputra" />
          <Gap height={17} />
          <FieldDetailProfile ket="Username" isi="admin" />
          <Gap height={17} />
          <FieldDetailProfile ket="Email" isi="asdkkaksk@gmial.com" />
          <Gap height={17} />
          <FieldDetailProfile ket="Jenis Kelamin" isi="Laki-laki" />
          <Gap height={17} />
          <FieldDetailProfile ket="No Hp" isi="08927266627268" />
          <Gap height={17} />
          <FieldDetailProfile ket="Alamat" isi="Asgard" />
          <Gap height={17} />
          <FieldDetailProfile ket="Jenis Akun" isi="Mitra Premium" />
          <Gap height={17} />
          {
            isVerf &&
            <>
              <FieldDetailProfile ket="Status Akun" isi="Terverfikasi" ICDPVerf={ICVerf} />
            </>
          }
          {
            !isVerf &&
            <>
              <FieldDetailProfile ket="Status Akun" isi="Belum Terverfikasi" ICDPVerf={ICNotVerf} />
            </>
          }

          <Gap height={17} />
          <FieldDetailProfile ket="Tanggal Mendaftar" isi="2019-08-29 15:27:22" />

        </ContainerDetail>

      </PageProfileDetail>
    </>
  )
}

export default ProfileDetail

const PageProfileDetail = styled.div`
background-color: blue;
  background-color:  #FFFFFF;;
  position: relative;
  top: 0px;
  max-width: 480px;
  width: 100%;
  margin: 0px auto;
  /* padding: 0px 16px 80px; */
  box-sizing: border-box;
  min-height: calc(1067px - 60px);
  /* flex:1; */
  z-index: 1;
`
const HeadProfileDetail = styled.div`
  background: #2B99FF;
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
`

const LeftHeadProfile = styled.div`
  /* background-color: pink; */
  flex: 1;
  display: flex;
  flex-direction: column;
`
const RightHeadProfile = styled.div`
  /* background-color: red; */
  flex: 1;
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  padding-top: 20px;

  .button{
    background-color: white;
    width: 120px;
    height: 40px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding:  4px 4px 4px 4px;
    flex: 1;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
    border: none;
  }

  .button img {
    width: 25px;
    height: 25px;
    display: flex;
    flex: 1;
  }

  .button p{
    font-family: Montserrat-sm;
    font-weight: 500;
    font-size: 13px;
    margin-left: 4px;
    width: 100%;
    color: #2B99FF;
  }
`

const WalletSaldo = styled.div`
  /* background-color: pink; */
  /* flex: 1; */
  display: flex;
  align-items: center;
  margin-bottom: 13px;

  img{
    width: 20%;
    margin-right: 10px
  }

  h3{
    font-family: Montserrat-sm;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    /* identical to box height */


    color: #FFFFFF;
  }
`
const NominalSaldo = styled.div`
  /* background-color: red; */
  flex: 1;
  display: flex;

  span{
    font-family: Montserrat-sm;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    /* identical to box height */


    color: #FFFFFF;
  }

  h3{
    margin-left: 5px;
    font-family: Montserrat-sm;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
  }
`

const ContainerDetail = styled.div`
  background: #FFFFFF;
  /* background: pink; */
  flex: 1;
  position: relative;
  top: -50px;
  /* height: 100vh; */
  border-radius: 20px;
  padding-top: 30px;
  padding-right: 16px;
  padding-left: 16px;

`