import React from 'react'
import styled from 'styled-components'
import Card from './Card.js'
import Characters from '../characters/Characters.js'

const StyledSquare = styled.div`
  background-color: darkgoldenrod;
  border: 3px solid gold;
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0,0,0,.3);
  display:inline-block;
  height: 220px;
  width: 220px;
`



const StyledBoard = styled.div`
  background-color: gold;
  border: 3px solid gold;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0,0,0,.5);
  margin: 100px auto;
  width: 678px;
`

export default class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cardSelected: null,
    }
    this.selectCard = this.selectCard.bind(this)
  }

  selectCard(card) {
    this.setState({
      cardSelected: card
    })
  }

  // render rows as a,b,c and 1,2,3
  // create a row component and render 3 rows dynamically*

  // key={rowValue + i} = "a1", "a3"

  // const winningConditions = [
  //   [a1.bottomValue > b1.topValue || a1.rightValue > a2.leftValue ? set state of Card.capturedBy to true || false]
  // ]

  render(){
    return (
      <StyledBoard>
        <div>
          <StyledSquare className="tile--hover" />
          <StyledSquare className="tile--hover" />
          <StyledSquare className="tile--hover">
            <Card
              onClick={this.selectCard}
              draggable
              capturedBy="player1"
              info={ Characters[2] }
            />
          </StyledSquare>
        </div>
        <div>
          <StyledSquare className="tile--hover">
            <Card
              onClick={this.selectCard}
              info={ Characters[7] }
            />
          </StyledSquare>
          <StyledSquare className="tile--hover">
            <Card
              onClick={this.selectCard}
              info={ Characters[0] }
            />
          </StyledSquare>
          <StyledSquare className="tile--hover">
            <Card
              onClick={this.selectCard}
              capturedBy="player1"
              info={ Characters[6] }
            />
          </StyledSquare>
        </div>
        <div>
          <StyledSquare className="tile--hover">
            <Card
              onClick={this.selectCard}
              info={ Characters[4] }
            />
          </StyledSquare>
          <StyledSquare className="tile--hover">
            <Card
              onClick={this.selectCard}
              capturedBy="player1"
              info={ Characters[3] }
            />
          </StyledSquare>
          <StyledSquare className="tile--hover">
            <Card
              onClick={this.selectCard}
              info={ Characters[1] }
            />
          </StyledSquare>
        </div>
      </StyledBoard>
    )
  }
}
