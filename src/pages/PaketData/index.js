import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, ActionSheet, PulsaCard, SelectPayment } from '../../components'
import { ChevronDown, ThreeLogo, Coin } from '../../assets'

class PaketData extends Component {
	constructor(props){
		super(props)
		this.state = {
			numInput: null,
			pulsaList: [
				{ id: 1, title: 'AON 1,5 GB', price: 1400, point: 80 },
				{ id: 2, title: 'AON 2 GB', price: 2338, point: 80 },
				{ id: 3, title: 'AON 2 GB 30hr', price: 3310, point: 80 },
				{ id: 4, title: 'AON 3 GB', price: 4477, point: 80 },
				{ id: 5, title: 'AON 5 GB 30hr', price: 5375, point: 80 }
			],
			selected: null,
			show: false,
			paymentShow: false,
			paymentSelected: ''
		}
	}

	handleSelect = index => {
		console.log(index)
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
		const { pulsaList, selected, numInput, show, payment, paymentShow, paymentSelected } = this.state

		return (
			<PageLayout>
				<NavBar nameNav="Paket Data" />
				<InputWrapper>
					<h3>Masukkan Nomor Tujuan</h3>
					<input type="number" placeholder="Contoh: 087755663857" value={numInput} onChange={e => this.setState({numInput: e.target.value})}/>
				</InputWrapper>
				<CardWrapper>
					{ numInput?.toString()?.length >= 4 && pulsaList.map(item => (
						<PulsaCard item={item} key={item.id} onSelect={() => this.handleSelect(item.id)} selected={selected === item.id} />
					))}
				</CardWrapper>
				<ActionSheet isShow={show} onClose={this.reset} height={70}>
					<h4>Deskripsi</h4>
					<BlockDesc>
						<p><strong>PERHATIAN !!</strong></p>
						<p>Pastikan Nomer Three Anda Benar & Tidak dalam MASA TENGGANG!.</p>
						<p>INJECT KUOTA LANGSUNG KE NOMER THREE ANDA</p>
						<br />
						<br />
						<p><strong>{pulsaList[selected - 1]?.title}</strong></p>
						<ul>
							<li><strong>24 Jam</strong></li>
							<li><strong>Masa Aktif 30 Hari</strong></li>
						</ul>
					</BlockDesc>
					<ButtonSelect onClick={() => this.setState({paymentShow: true})}>{paymentSelected ? paymentSelected : 'Pilih Metode Pembayaran'} <img src={ChevronDown} /></ButtonSelect>
					<ButtonOrder disabled={!paymentSelected}>Pesan sekarang</ButtonOrder>
				</ActionSheet>
				<SelectPayment 
					isShow={paymentShow} 
					onClose={() => this.setState({paymentShow: false})} 
					height={70} 
					overlay={false}
					onSelect={this.handleSelectPayment} 
				/>
			</PageLayout>
		)
	}
}

export default PaketData

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

    	ul {
    		margin-left: 40px;
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
