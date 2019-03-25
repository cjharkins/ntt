import React from 'react'

const infoStyles = {
  color: 'white',
  fontSize: '18px',
  textAlign: 'center'
}

const Header = props => (
    <div style={infoStyles}>
      {props.displayText}
    </div>
)

export default Header
