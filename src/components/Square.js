import React from 'react'
import styled from 'styled-components'
import Card from './Card.js'


const StyledSquare = styled.div`
  background-color: darkgoldenrod;
  border: 3px solid gold;
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0,0,0,.3);
  display:inline-block;
  height: 220px;
  width: 220px;
`

const ShadowDiv = styled.div`
  background-color: rgba(255,0,0,1)
  height: 200px;
  position: absolute;
  width: 200px;
  z-index: 999;
  top:0;
  left:0;
`

export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const square = this.props
    this.props.onClick(square.id)
  }

  render(){
    const card = this.props.card
    return (
      <StyledSquare
        onClick={this.handleClick}
        value={this.props}
      >
        { Object.keys(card) == 0 ? (<div></div>) :(<Card info={card} />) }
        <ShadowDiv  />
      </StyledSquare>
    )
  }
}
