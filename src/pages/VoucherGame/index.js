import React, { Component } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { NavBar, ActionSheet, CardGame, SelectPayment } from '../../components'
import { ChevronDown, MlLogo, PubgLogo, garenaLogo, ffLogo, wifiLogo, googleLogo, CodmLogo } from '../../assets'

class VoucherGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameList: [
                { id: 1, nama: 'Mobile Legends', logo: MlLogo, alt: 'Mobile Legends Logo' },
                { id: 2, nama: 'PUBG', logo: PubgLogo, alt: 'PUBG Mobile Logo' },
                { id: 3, nama: 'Voucher Garena', logo: garenaLogo, alt: 'Garena Logo' },
                { id: 4, nama: 'Free Fire', logo: ffLogo, alt: 'Free Fire Logo' },
                { id: 5, nama: 'Voucher Google Play Indonesia', logo: googleLogo, alt: 'Google Play Logo' },
                { id: 6, nama: 'Wifi ID', logo: wifiLogo, alt: 'wifiID Logo' },
                { id: 7, nama: 'Call of Duty Mobile', logo: CodmLogo, alt: 'Call of Duty Mobile' }
            ],
            selected: null,
            show: false,
            paymentShow: false,
            paymentSelected: ''
        }
    }

    handleSelect = index => {
		console.log("ini adalah handle select"+index)
		if (this.state.selected === index){
			this.setState({ selected: null, show: false })
			return
		}

		this.setState({ selected: index, show: true })
	}

    handleSelectPayment = value => {
        this.setState({ paymentSelected: value, paymentShow: false })
    }

    reset = () => {
        this.setState({ selected: null, show: false })
    }

    render() {
        const { gameList, selected, show, payment, paymentShow, paymentSelected } = this.state
       

        return (
            <PageLayout>
                <NavBar nameNav="Voucher Game" />
                <CardWrapper>
                    {gameList.map(item => (
                        <CardGame key={item.id} logoGame={item.logo} altLogo={item.alt} namaGame={item.nama} onClick={() => window.location="/voucherDetail"}  />
                    ))}
                </CardWrapper>
            </PageLayout>
        )
    }
}

export default VoucherGame

const PageLayout = styled.div`
	max-width: 480px;
	margin: 0 auto;
	background-color: #fff;
	box-sizing: border-box;
	position: relative;
	height: 100vh;
`
const InputWrapper = styled.div`
	padding: 15px 25px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;

	& {
		h3 {
			font-size: 15px;
			margin-bottom: 10px;
			font-family: 'Montserrat-sm';
		}

		input {
			padding: 10px;
			width: 100%;
			border: 1px solid #2b99ff;
			border-radius: 10px;
			outline: none;
			font-size: 14px;
			font-family: 'Montserrat';
		}
	}
`

const CardWrapper = styled.div`
	padding: 0 15px;
`

const BlockDesc = styled.div`
	padding: 20px 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    background: #d8ecff;
    border-radius: 10px;

    & {
    	strong {
    		font-family: 'Montserrat-sm'
    	}
    }
`

const ButtonSelect = styled.button`
	width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    font-size: 18px;
    font-family: 'Montserrat';
    background: none;
    border: 1px solid #000;
    border-radius: 10px;
    cursor: pointer;

    & {
    	img {
    		width: 20px;
    	}
    }
`

const ButtonOrder = styled.button`
	width: 90%;
    margin: 15px auto;
    background: #2b99ff;
    border: none;
    color: #fff;
    font-family: 'Montserrat-sm';
    font-size: 18px;
    padding: 15px 0;
    border-radius: 10px;
    display: block;
    cursor: pointer;

    &:disabled {
    	background: #f3f3f3;
    	color: #736d6d;
    	cursor: not-allowed;
    }

`