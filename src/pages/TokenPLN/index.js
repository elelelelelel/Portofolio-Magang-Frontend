import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { ButtomSheet, CardPLNPrabayar, Gap, NavBar } from '../../components'

const TokenPLN = () => {
  const history = useHistory()
  const [pascabayar, setPascaBayar] = useState(false)
  const [isDetect, setDetect] = useState(false)
  const [sheetVisible, setSheetVisible] = useState(false)

  let data = [
    {
      id: 1,
      coin: 40,
      token: 20,
      price: 20.155,
      desc: 'prabayar',
    },
    {
      id: 2,
      coin: 40,
      token: 50,
      price: 50.155,
      desc: 'prabayar',
    },
    {
      id: 2,
      coin: 40,
      token: 100,
      price: 100.155,
      desc: 'prabayar',
    },
    {
      id: 2,
      coin: 40,
      token: 200,
      price: 200.155,
      desc: 'prabayar',
    },

  ]


  useEffect(() => {
    setTimeout(() => {
      setDetect(true)
    }, 3000);
  }, [])

  return (
    <TokenPLNPage>
      <NavBar nameNav="PLN" onClick={() => history.goBack()} />
      <WraperTopPLN>
        <Kategori>
          <Gap height={16} />
          <h3>Kategori</h3>
          <Gap height={15} />
          <Ket>
            <PilItem>
              <input type="radio" id="prabayar" defaultChecked name="pln" onChange={() => setPascaBayar(false)} />
              <label for="prabayar">Prabayar</label>
            </PilItem>
            <PilItem>
              <input type="radio" id="pascabayar" name="pln" onChange={() => setPascaBayar(true)} />
              <label for="pascabayar">Pascabayar</label>
            </PilItem>
          </Ket>
        </Kategori>
        <Gap height={15} />
        <InputIDPlanggan>
          <h3>ID Pelanggan</h3>
          <Gap height={5} />
          <input placeholder="Contoh : 36084456****" type="number" />
        </InputIDPlanggan>
        <Gap height={15} />
        {
          pascabayar ?
            <WraperButtonPascabayar>
              <BtnPascabayar onClick={() => setSheetVisible(true)}>Berikutnya</BtnPascabayar>
            </WraperButtonPascabayar> :
            isDetect ?
              <AlertKeterangan>
                <TopContent>
                  <h3>Nama Pelanggan</h3>
                  <h3>Tarif / Daya</h3>
                </TopContent>
                <Gap height={4} />
                <MidContent>
                  <h3>Edi Mulyono</h3>
                  <h3>R1M / 51VA</h3>
                </MidContent>
                <Gap height={4} />
                <BotContent>
                  <h3>86002849890</h3>
                </BotContent>
              </AlertKeterangan> : ''

        }
      </WraperTopPLN>
      <WraperBot>

        {
          pascabayar ? '' :
            <>
              {data.map(items => {
                return (
                  <CardPLNPrabayar key={items.id} coin={items.coin} nameToken={items.token} hargaToken={items.price} onClick={() => setSheetVisible(true)} />
                )
              })}

            </>
        }



      </WraperBot>
      <ButtomSheet
        sheetVisible={sheetVisible}
        setSheetVisible={(item) => setSheetVisible(item)}
      />
    </TokenPLNPage>
  )
}

export default TokenPLN

const TokenPLNPage = styled.div`
  /* background-color: blue; */
  background-color: #FFFFFF;
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

const WraperTopPLN = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 12px 12px;
  width: 100%;
  background: #FFFFFF;
  padding-left: 16px;
  padding-right: 16px;

  height: 241px;
`
const Kategori = styled.div`
 h3{
  color: rgba(0, 0, 0, 0.2);
  font-family: Montserrat-sm;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
 }

`

const InputIDPlanggan = styled.div`

h3{
  font-family: Montserrat-sm;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height */

  color: #6A6A6A;
}

input{
  background: #EBF5FF;
  border: 0.5px solid #2B99FF;
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  height: 43px;
  padding-left: 21px;
  padding-right: 21px;

  &:focus {
    outline: none;
    border-color: #2B99FF;
  }
  &::-webkit-input-placeholder {
    color: #C4C4C4;
  }
}

`

const AlertKeterangan = styled.div`
  background: rgba(2, 219, 50, 0.09);
  border-radius: 12px;
  width: 100%;
  height: 71px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
`

const Ket = styled.div`
	display: flex;
	/* justify-content: space-between; */
	align-items: center;
	flex-flow: row wrap;
  /* background-color: blue; */
`

const PilItem = styled.div`

  margin-left:5px;
  /* background-color: #C4C4C4; */
   
    input[type=radio] {
        display: none;
        background-color: #C4C4C4;
    }

    label {
      border-radius: 50px;
      border: 2px solid #2B99FF;
      font-family: 'Montserrat-sm';
      font-size: 15px;
      padding: 5px;
      cursor: pointer;
      color: #FFFFFF;
      background-color: #C4C4C4;
    }

      input[type=radio]:checked ~ label {
        background: #2A99FF;
        color: #fff;
        border: 2px solid #2A99FF;
      }
    
`

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  
  


      h3{    
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;

      color: #000000;

      }

`

const MidContent = styled.div`
  display: flex;
  justify-content: space-between;

  h3{
    font-family: Montserrat-sm;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    /* identical to box height */


    color: #000000;
  }


`
const BotContent = styled.div`
  display: flex;
  justify-content: space-between;
  


      h3{    
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;

      color: #000000;

      }
`

const WraperBot = styled.div`
  
  margin-top: 10px;
  display: flex;
  background-color: #FFFFFF;
  /* background-color: red; */
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  height: 66vh;
`

const BtnPascabayar = styled.button`
  width: 100%;
  height: 49px;
  background: #2A99FF;
  box-shadow: 10px 15px 50px rgba(43, 153, 255, 0.2);
  border-radius: 20px;
  border: none;
  color: #FFFFFF;
  font-family: Montserrat-sm;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1.25px;
  font-feature-settings: 'case' on;
`

const WraperButtonPascabayar = styled.div`
  /* background: rgba(2, 219, 50, 0.09); */
  background: transparent;
  border-radius: 12px;
  width: 100%;
  height: 71px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
`