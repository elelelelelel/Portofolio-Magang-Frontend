import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, ActionSheet, GameCard, SelectPayment } from '../../components'
import { ChevronDown} from '../../assets'

class VoucherDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numInput: null,
            mlList: [
                { id: 1, title: '36 Diamond', price: 10200, point: 80 },
                { id: 2, title: '85 Diamond', price: 22750, point: 80 },
                { id: 3, title: '170 Diamond', price: 47950, point: 80 },
                { id: 4, title: '185 Diamond', price: 48500, point: 80 },
                { id: 5, title: '222 Diamond', price: 59950, point: 80 },
                { id: 6, title: '296 Diamond', price: 79950, point: 80 },
                { id: 7, title: '568 Diamond', price: 143850, point: 80 },
                { id: 5, title: 'Starligh 30 Hari + 4 Diamond', price: 146550, point: 80 },
                { id: 5, title: 'Twilight Pass Season', price: 144750, point: 80 },
                { id: 5, title: 'Starligh 30 Hari + 193 Diamond', price: 199500, point: 80 }
            ],
            selected: null,
            show: false,
            paymentShow: false,
            paymentSelected: ''
        }
    }

    handleSelect = index => {
        console.log(index)
        if (this.state.selected === index) {
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
        const { mlList, selected, numInput, show, payment, paymentShow, paymentSelected } = this.state

        return (
            <PageLayout>
                <NavBar nameNav="Mobile Legends" />
                <InputWrapper>
                    <h3>Masukkan ID Pelanggan</h3>
                    <input type="number" placeholder="Contoh: 087755663857" value={numInput} onChange={e => this.setState({ numInput: e.target.value })} />
                    <br />
                    <br />
                    <p><strong>PERHATIAN !!</strong></p>
                    <p>Masukkan USER ID .</p>
                </InputWrapper>
                <CardWrapper>
                    {numInput?.toString()?.length >= 4 && mlList.map(item => (
                        <GameCard item={item} key={item.id} onSelect={() => this.handleSelect(item.id)} selected={selected === item.id} />
                    ))}
                </CardWrapper>
                <ActionSheet isShow={show} onClose={this.reset} height={60}>
                    <h4>Deskripsi</h4>
                    <BlockDesc>
                        <p>Anda memilih <strong>{mlList[selected - 1]?.title}</strong></p>
                        <br />
                        <br />
                        <p><strong>PERHATIAN !!</strong></p>
                        <p>Masukkan USER ID .</p>
                    </BlockDesc>
                    <ButtonSelect onClick={() => this.setState({ paymentShow: true })}>{paymentSelected ? paymentSelected : 'Pilih Metode Pembayaran'} <img src={ChevronDown} /></ButtonSelect>
                    <ButtonOrder disabled={!paymentSelected}>Pesan sekarang</ButtonOrder>
                </ActionSheet>
                <SelectPayment
                    isShow={paymentShow}
                    onClose={() => this.setState({ paymentShow: false })}
                    height={60}
                    overlay={false}
                    onSelect={this.handleSelectPayment}
                />
            </PageLayout>
        )
    }
}

export default VoucherDetail

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
