import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, ActionSheet, CardHistory, SelectPayment } from '../../components'
import { ChevronDown } from '../../assets'

class History extends Component {
	constructor(props){
		super(props)
		this.state = {
			numInput: null,
			historyList: [
				{ id: 1, title: 'ALL Nelpon 20mnt 7hr', price: 5650, status: 0 },
				{ id: 2, title: 'All Nelpon 60mnt 30hr', price: 14999, status: 1 },
				{ id: 3, title: 'ALL Nelpon 150mnt 30hr', price: 30750, status: 2 },
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
		const { historyList, selected, numInput, show, payment, paymentShow, paymentSelected } = this.state

		return (
			<PageLayout>
				<NavBar nameNav="History" />
				<InputWrapper>
					<input type="text" placeholder="Cari Riwayat Kamu" />
				</InputWrapper>
				<CardWrapper>
					{ historyList.map(item => (
						<CardHistory item={item} key={item.id} onSelect={() => this.handleSelect(item.id)} selected={selected === item.id} status={item.status} />
					))}
				</CardWrapper>
				<ActionSheet isShow={show} onClose={this.reset} height={60}>
					<h4>Deskripsi</h4>
					<BlockDesc>
						<p>Anda memilih <strong>{historyList[selected - 1]?.title}</strong></p>
						<br/>
						<br/>
						<p><strong>PERHATIAN !!</strong></p>
						<p>Pastikan Nomer Three dalam keadaan Aktif dan Benar.</p>
					</BlockDesc>
				</ActionSheet>
			</PageLayout>
		)
	}
}

export default History

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
