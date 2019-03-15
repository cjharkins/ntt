import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/Board.js'
import styled from 'styled-components'
import Panel from './components/Panel.js'

const CenterPanel = styled.div`
  display: inline-block;
  vertical-align: top;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardSelected: null,
      squareSelected: null,
      board: [...Array(9).fill({})]
    }
    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.handleSquareSelection = this.handleSquareSelection.bind(this)
  }

  handleCardSelection(card) {
    this.setState({
      cardSelected: card,
    })
  }

  handleSquareSelection(square) {
    this.setState({
      squareSelected: square,
    })

    if (this.state.cardSelected != null) {
      this.setState({
        board: this.state.board.map((val,index)=> {
          if (index === square) {
            return Object.assign({},val,this.state.cardSelected)
          }
          return val
        })
      })
    }

    return this.state.board
  }

  render(){
    return (
      <div>
        <Panel
          handleCardSelection={this.handleCardSelection}
        />
        <CenterPanel>
          <Board
            gameState={this.state.board}
            handleSquareSelection={this.handleSquareSelection}
          />
        </CenterPanel>
        <Panel
          handleCardSelection={this.handleCardSelection}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
