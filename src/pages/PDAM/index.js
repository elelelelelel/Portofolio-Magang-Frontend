import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, ActionSheet, CardPDAM, SelectPayment } from '../../components'
import { ChevronDown, ThreeLogo, Coin } from '../../assets'

class PDAM extends Component {
	constructor(props){
		super(props)
		this.state = {
			kotaInput: null,
			kotaList: [
				{ id: 1, kota: 'DKI Jakarta', kantor: 'PALJAYA DKI Jakarta'},
				{ id: 2, kota: 'DKI Jakarta', kantor: 'AETRA DKI Jakarta'},
				{ id: 3, kota: 'Kab. Bogor', kantor: 'PDAM Tirta Kahuripan'},
				{ id: 4, kota: 'Kab. Depok', kantor: 'PDAM Tirta Asasta'},
				{ id: 5, kota: 'Kota Bekasi', kantor: 'PDAM Kota Bekasi'}
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
		this.setState({paymentSelected: value, paymentShow: false})
	}

	reset = () => {
		this.setState({ selected: null, show: false })
	}

	render(){
		const { kotaList, selected, kotaInput, show, payment, paymentShow, paymentSelected } = this.state

		return (
			<PageLayout>
				<NavBar nameNav="PDAM" />
				<InputWrapper>
					<h3>Cari penyedia air setempat</h3>
					<input type="text" placeholder="Contoh: Jakarta" value={kotaInput} onChange={e => this.setState({kotaInput: e.target.value})}/>
				</InputWrapper>
				<CardWrapper>
					{ kotaInput?.length >= 4 && kotaList.map(item => (
						<CardPDAM key={item.id} daerahPDAM={item.kota} kantorPDAM={item.kantor} onSelect={() => this.handleSelect(item.id)} selected={selected === item.id} />
					))}
				</CardWrapper>
				<ActionSheet isShow={show} onClose={this.reset} height={60}>
					<InputWrapper>
					<h3>Masukkan ID Pelanggan</h3>
					<input type="number" placeholder="ID Pelanggan"/>
					<h4>Detail Tagihan</h4>
				</InputWrapper>
					<BlockDesc>
						<p>Anda memilih <strong>{kotaList[selected - 1]?.daerah}</strong></p>
						<br/>
						<br/>
						<p><strong>PERHATIAN !!</strong></p>
						<p>Pastikan Nomer Three dalam keadaan Aktif dan Benar.</p>
					</BlockDesc>
					<ButtonSelect onClick={() => this.setState({paymentShow: true})}>{paymentSelected ? paymentSelected : 'Pilih Metode Pembayaran'} <img src={ChevronDown} /></ButtonSelect>
					<ButtonOrder disabled={!paymentSelected}>Bayar sekarang</ButtonOrder>
				</ActionSheet>
				<SelectPayment 
					isShow={paymentShow} 
					onClose={() => this.setState({paymentShow: false})} 
					height={60} 
					overlay={false}
					onSelect={this.handleSelectPayment} 
				/>
			</PageLayout>
		)
	}
}

export default PDAM

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
