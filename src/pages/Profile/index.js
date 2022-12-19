import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { DummyUsers } from '../../assets/Dummy'
import { ICAccountCPwd, ICAccountExit, ICAccountPoint, ICAccountProfile, ICAccountSettings, ICAccountVerf, ICNotVerf, ICPitaStar, ICVerf } from '../../assets/icon'
import { Gap } from '../../components'
import CardProfile from '../../components/molecules/CardProfile'
import './Profile.css'

const Profile = () => {
  const history = useHistory();
  const [isVerf, setVerf] = useState(true);


  return (
    <>
      <ProfilePage>
        <WrapperProfile>
          <img src={DummyUsers} alt="user-profile" />
          <TextProfile>
            <h3>Hai Decky Ilham</h3>
            <h4>Akunmu belum premium</h4>
            <ChekVerf>
              {
                isVerf
                  ?
                  <>
                    <img src={ICVerf} alt="ic-verf" />
                    <h5>Terverifikasi</h5>
                  </>
                  :
                  <>
                    <img src={ICNotVerf} alt="ic-verf" />
                    <h5>Belum Terverifikasi</h5>
                  </>
              }
            </ChekVerf>
          </TextProfile>
        </WrapperProfile>
        {
          isVerf ? <AlertSubmision></AlertSubmision>
            : <AlertSubmision>
              <Persentase>
                <h3>70%</h3>
              </Persentase>
              <TextSubmision>
                <h3>Mari lengkapi data dirimu.</h3>
                <Persentasi>
                  <ChildPresentasi>

                  </ChildPresentasi>
                </Persentasi>
              </TextSubmision>
            </AlertSubmision>
        }
        <ContainerPage>

          <IklanBanner>
            <img src={ICPitaStar} alt="ic-pitastar" />
            <h3>Jadikan Akunmu Premium</h3>
          </IklanBanner>

          <CardProfile icAccount={ICAccountProfile} nameAccount="Profil" onClick={() => history.push("/profile-detail")} />
          <Gap height={20} />
          <CardProfile icAccount={ICAccountVerf} nameAccount="Verifikasi" />
          <Gap height={20} />
          <CardProfile icAccount={ICAccountPoint} nameAccount="Tukarkan Points" onClick={() => history.push('/tukar-point')} />
          <Gap height={20} />
          <CardProfile icAccount={ICAccountSettings} nameAccount="Ubah Kata Sandi" />
          <Gap height={20} />
          <CardProfile icAccount={ICAccountCPwd} nameAccount="Ubah Kata Sandi" />
          <Gap height={20} />
          <CardProfile icAccount={ICAccountExit} nameAccount="Keluar" />
          <Gap height={220} />


        </ContainerPage>

      </ProfilePage>
    </>
  )
}

export default Profile

const IklanBanner = styled.div`
  background: #FF9900;
  border-radius: 12px;
  /* width: 328px; */
  width: 100%;
  height: 70px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  filter: drop-shadow(5px 5px 4px rgba(190, 203, 216, 0.25));


  img{
    margin-left: 20px
  }

  h3{
    display: flex;
    flex: 1;
    margin-left: 20px;
    font-family: Montserrat-sm;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 17px;
    /* identical to box height */


    color: #FFFFFF;
  }
`

const ProfilePage = styled.div`
 background-color: blue;
  background-color: #F3F9FF;
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

const ContainerPage = styled.div`
  background-color: #FFFFFF;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  /* height: 100vh; */
  padding-left: 16px;
  padding-right: 16px;
`

const WrapperProfile = styled.div`
  background-color: #ECF5FF;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* position: absolute; */
  left: 0;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-left: 23px;
    margin-right: 15px;
  }
`

const TextProfile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h3{
    font-family: Montserrat-sm;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    /* identical to box height */
    color: #6A6A6A;
  }

  h4{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;

    color: #6A6A6A;
  }

`

const ChekVerf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  align-items: center;


  img {
    margin: 0px;
    height: 20px;
    width: 20px;
  }

  h5{
    display: flex;
    flex: 1;
    margin-left: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #6A6A6A;

  }
`

const AlertSubmision = styled.div`
  display: flex;
  background-color: #B9DCFF;
  flex:1;
  width: 100%;
  /* position: relative; */
  padding-left: 44px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
`

const Persentase = styled.div`
  background: #02DB32;
  border-radius: 12px;
  width: 50px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3{
  font-family: Montserrat-bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  color: #FDFEFE;
  }
`
const TextSubmision = styled.div`
  margin-left: 15px;


  h3{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;

    color: #6A6A6A;
  }
`

const Persentasi = styled.div`
  margin-top: 5px;
  width: 225px;
  height: 10px;
  background: #FFFFFF;
  border-radius: 20px;
`

const ChildPresentasi = styled.div`
  width: 180px;
  height: 10px;
  background: #02DB32;
  border-radius: 20px;
  position: absolute;
`