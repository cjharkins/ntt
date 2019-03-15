import React from 'react'
import styled from 'styled-components'
import Square from './Square.js'


const StyledBoard = styled.div`
  background-color: gold;
  border: 3px solid gold;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0,0,0,.5);
  margin: 100px 0 0 0;
  width: 678px;
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
    this.props.handleSquareSelection(square)
  }

  render(){
    return (
      <StyledBoard>
        <div>
          { this.props.gameState.map((squareValue, i) =>{
            return (
              <Square
                id={i}
                key={i}
                onClick={this.selectSquare}
                className="tile--hover"
                card={squareValue}
              />
            )
          })
          }
        </div>
      </StyledBoard>
    )
  }
}
