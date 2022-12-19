import React from 'react'
import styled from 'styled-components'
import { ChevronDown, Coin } from '../../../assets'

const GameCard = ({ item, onSelect, selected }) => {
	const currency = price => {
	    if(price){
	        let reverse = price.toString().split('').reverse().join('')
	        let thousand = reverse.match(/\d{1,3}/g)
	        thousand = thousand.join('.').split('').reverse().join('')
	        
	        return thousand
	    }

	    return null
	}

	return (
		<CardInner key={item.id} onClick={() => onSelect(item.id)} selected={selected}>
			<div>
				<Wrapper>
					<img src={Coin}/>
					<strong>{item.point}</strong>
				</Wrapper>
				<Wrapper>
					<div>
						<h4>{item.title}</h4>
						<h3>Rp <span>{currency(item.price)}</span></h3>
					</div>
				</Wrapper>
			</div>
			<div>
				<img src={ChevronDown} />
			</div>
		</CardInner>
	)
}

export default GameCard

const CardInner = styled.div`
	position: relative;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	padding: 15px 25px;
	background: ${props => props.selected ? '#2b99ff' : '#fff'};
	border-radius: 20px;
	margin: 20px 0;
	line-height: 1.5;
	cursor: pointer;
	color: ${props => props.selected ? '#fff' : '#000'};

	& {
		h3 {
			margin: 0;
			font-size: 16px;

			span {
				font-family: 'Montserrat-sm'
			}
		}

		h4 {
			letter-spacing: 1.5px;
			font-size: 16px;
			font-family: 'Montserrat-sm'
		}

		img {
    		width: 20px;
    		filter: ${props => props.selected ? 'invert(100%)' : 'none'};
    	}
	}
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 45px;
`

const ProviderLogo = styled.img`
	position: absolute;
	width: auto !important;
	height: 30px;
	margin-right: 10px;
	top: 50%;
    left: 35px;
    transform: translate(-50%, -50%);
`