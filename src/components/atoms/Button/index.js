import React from 'react'
import './Button.css'

const Button = ({ icLogo, alt, title, onClick, ...rest }) => {
  return (
    <button className="button" {...rest} onClick={onClick}>
      <img src={icLogo} alt={alt} />
      <p>{title}</p>
    </button>
  )
}

export default Button
