import React from 'react'
import styled from 'styled-components'
import { ChevronDown } from '../../../assets'
import './CardHistory.css'

const CardHistory = ({ item, onSelect, selected, status}) => {
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
			
						<h4>{item.title}</h4>
						<h5>Rp <span>{currency(item.price)}</span></h5>
						<h5>Contoh</h5>
					</div>
					<div>
						<h5>Contoh</h5>
						<h5>Rp <span>{currency(item.price)}</span></h5>
						<h5>Contoh</h5>
					
			</div>
			<div>
				<img src={ChevronDown} />
			</div>
		</CardInner>
	)
}

export default CardHistory

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
	border-left: 20px solid #01ff70;
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

const WrapperLeft = styled.div`
	display: inline;
	align-items: center;
	margin-left: 10px;
	width: 20%;
	justify-content: center;
	float: left;
`

const WrapperRight = styled.div`
	display: inline;
	align-items: right;
	margin-left: 300px;
	flex: 1;
    flex-direction: column;
	float: left;
`