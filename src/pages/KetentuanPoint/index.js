import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../../components'
import { TermsIcon } from '../../assets'

class KetentuanPoint extends Component {
	constructor(props){
		super(props)
		this.state = {
			terms : [
				'Poin hanya bisa di tukarkan dengan saldo akun.',
				'Penukaran poin minimal 5000 poin.',
				'1 Poin sama dengan 0,5 rupiah.',
				'1 kali transaksi Pulsa akan mendapatkan 20 poin.',
				'1 kali transaksi Internet akan mendapatkan 50 poin.',
				'1 kali transaksi Voucher akan mendapatkan 20 poin.',
			]
		}
	}

	render(){
		const { terms } = this.state

		return (
			<PageLayout>
				<NavBar nameNav="Ketentuan Points" />
				<ContentWrapper>
					<h3>Syarat & Ketentuan</h3>
					<ol>
						{ terms.map((term, index) => (
							<li key={index}>{term}</li>
						))}
					</ol>
					<img src={TermsIcon} alt="Terms Icon" />
				</ContentWrapper>
			</PageLayout>
		)
	}
}

export default KetentuanPoint

const PageLayout = styled.div`
	max-width: 480px;
	margin: 0 auto;
	background-color: #ECF5FF;
	height: 100vh;
`

const ContentWrapper = styled.div`
	padding: 30px 16px;
    display: flex;
    flex-flow: column wrap;

	& {
		h3 {
			font-weight: 700;
    		font-size: 18px;
    		line-height: 17px;
    		font-family: 'Montserrat-sm';
		}

		ol {
			margin: 16px 16px 50px;

			li {
				font-size: 15px;
    			line-height: 1.5;
			}
		}

		img {
			margin: 40px auto;
    		width: 200px
		}
	}
`