import React from 'react'
import styled from 'styled-components'
import Card from './Card.js'


const StyledSquare = styled.div`
  background-color: #b0bec5;
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0,0,0,.3);
  display:inline-block;
  height: 250px;
  width: 200px;
  margin: 4px;
  vertical-align: top;
`

const ShadowDiv = styled.div`
  background-color: rgba(255,0,0,1)
  height: 200px;
  position: absolute;
  width: 200px;
  z-index: 999;
  top:0;
  left:0;
  box-sizing: border-box;
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
        onClick={this.props.canClick ? this.handleClick:undefined}
        value={this.props}
        className="tile--hover"
      >
        { Object.keys(card).length === 0 ? (<Card info={null} />) :(<Card info={card} />) }
        <ShadowDiv  />
      </StyledSquare>
    )
  }
}
