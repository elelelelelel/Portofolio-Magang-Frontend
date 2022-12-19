import React from 'react'
import styled from 'styled-components'
import ActionSheet from '../ActionSheet'

const SelectPayment = ({ isShow, onClose, height, overlay, onSelect}) => {
	const payment = [
		{ title: 'Bank BCA', img: '' },
		{ title: 'Bank BRI', img: '' },
		{ title: 'Bank BNI', img: '' },
		{ title: 'Bank MANDIRI', img: '' },
		{ title: 'OVO', img: '' },
		{ title: 'LinkAja', img: '' },
		{ title: 'DANA', img: '' },
	]

	return (
		<ActionSheet isShow={isShow} onClose={onClose} height={height} overlay={overlay}>
			{ payment.map((pay, index) => (
				<PaymentItem key={index} onClick={() => onSelect(pay.title)}> 
					{pay.title}
				</PaymentItem>
			))}
		</ActionSheet>
	)
}

export default SelectPayment

const PaymentItem = styled.div`
	padding: 10px 20px;
    background: #f3f3f3;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`