import React from 'react'
import styled from 'styled-components'
import Square from './Square.js'
import Header from './Header.js'


const StyledBoard = styled.div`
  background-color: #607d8b;
  border: 3px solid #607d8b;
  border-radius: 5px;
  margin: 0px;
  width: 625px;
  display: inline-block;
`

export default class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      squares: []
    }
    this.selectSquare = this.selectSquare.bind(this)
  }

  selectSquare(square) {
    this.props.handleSquareSelection(square,this.props.playerTurn)
  }

  render(){
    return (
      <div>
        <Header
          displayText={this.props.displayText}
        />
        <StyledBoard>
          <div>
            { this.props.gameState.map((squareValue, i) =>{
              return (
                <Square
                  id={i}
                  key={i}
                  onClick={this.props.canClick ? this.selectSquare:undefined}
                  canClick={this.props.canClick}
                  className="tile--hover"
                  card={squareValue}
                />
              )
            })
            }
          </div>
        </StyledBoard>
      </div>
    )
  }
}
