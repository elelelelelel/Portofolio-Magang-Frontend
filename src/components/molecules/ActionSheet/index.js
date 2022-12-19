import React from 'react' 
import styled from 'styled-components'

const ActionSheet = ({ children, isShow, onClose, height, overlay = true }) => {

	return (
		<React.Fragment>
			<InnerTop onClick={onClose} show={isShow} overlay={overlay}/>
			<InnerBottom show={isShow} height={height}>
				{ children }
			</InnerBottom>
		</React.Fragment>
	)
}

export default ActionSheet

const InnerTop = styled.div`
    position: absolute;
    top: 0;
	background: ${props => props.show ? 'rgb(0 0 0 / 0.08)' : 'transparent'};
    z-index: 2;
    height: 100%;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    opacity: ${props => props.overlay ? '1' : '0'};
    width: 100%;
    transition: ease-in .3s;
`

const InnerBottom = styled.div`
	position: fixed;
    max-width: 480px;
    margin: auto;
	background: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 20px;
    z-index: 5;
    bottom: ${props => props.show ? 0 : '-20px'};
    width: 100%;
    transition: height ease-in .3s;
    height: ${props => props.show ? `${props.height}%` : 0};
`