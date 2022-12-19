import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, ActionSheet, PulsaCard, SelectPayment } from '../../components'
import { ChevronDown, ThreeLogo, Coin } from '../../assets'

class Voucher extends Component {
	constructor(props){
		super(props)
		this.state = {
			numInput: null,
			pulsaList: [
				{ id: 1, title: 'Voucher AON 2GB', price: 1400, point: 80 },
				{ id: 2, title: 'Voucher AON 5GB', price: 2338, point: 80 },
				{ id: 3, title: 'Voucher AON 3GB + 6GB', price: 3310, point: 80 },
				{ id: 4, title: 'Voucher AON 5GB + 8GB', price: 4477, point: 80 },
				{ id: 5, title: 'Voucher AON 6GB + 12GB', price: 5375, point: 80 }
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
				<NavBar nameNav="Voucher Internet" />
				<InputWrapper>
					<h3>Masukkan Nomor Tujuan</h3>
					<input type="number" placeholder="Contoh: 087755663857" value={numInput} onChange={e => this.setState({numInput: e.target.value})}/>
				</InputWrapper>
				<CardWrapper>
					{ numInput?.toString()?.length >= 4 && pulsaList.map(item => (
						<PulsaCard item={item} key={item.id} onSelect={() => this.handleSelect(item.id)} selected={selected === item.id} />
					))}
				</CardWrapper>
				<ActionSheet isShow={show} onClose={this.reset} height={80}>
					<h4>Deskripsi</h4>
					<BlockDesc>
						<p><strong>PERHATIAN !!</strong></p>
						<p>Kode Voucher Akan dikirimkan ke Nomer Three yang telah anda masukan diatas.Pastiakn Nomer Three dalam keadaan Aktif dan benar.</p>
						<br />
						<br />
						<p>------------------------------------------------------</p>
						<p>Cara pengisian paket: *111*kode voucher# lalu OK</p>
						<p>------------------------------------------------------</p>
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
					height={80} 
					overlay={false}
					onSelect={this.handleSelectPayment} 
				/>
			</PageLayout>
		)
	}
}

export default Voucher

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
