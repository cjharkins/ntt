import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: grey;
    border: ${ props => props.capturedBy === 'player1' ? `10px solid steelblue`:`10px solid tomato` };
    border-radius: 3px;
    box-shadow: inset 0 0 10px rgba(0,0,0,.3);
    -moz-box-shadow: inset 0 0 10px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,.3);
    display: inline-block;
    height: 200px;
    margin: 0px;
    overflow: hidden;
    position: relative;
    width: 200px;
`

const CardImg = styled.img`
    height: 200px;
    position:absolute;
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

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const card = this.props.info
    console.log(card)
    this.props.onClick(card)
  }
  render(){
    return (
      <CardContainer
        onClick={this.handleClick}
        id={this.props.info._id}
        capturedBy={this.props.capturedBy}
        value={this.props}
      >
        <CardImg src={ this.props.info.image } alt="card" />
        <div className="values values--container">
          <h2 className="value values--top">
            { this.props.info.topValue }
          </h2>
          <h2 className="values--middle">
            <span className="value">{ this.props.info.leftValue }</span>
            <span className="value">{ this.props.info.rightValue }</span>
          </h2>
          <h2 className="value values--bottom">{ this.props.info.bottomValue }</h2>
        </div>
        <ShadowDiv  />
      </CardContainer>
    )
  }
}
