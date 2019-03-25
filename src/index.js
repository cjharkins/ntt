import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/Board.js'
import styled from 'styled-components'
import Panel from './components/Panel.js'
import WinnerModal from './components/WinnerModal.js'
import characters from './characters/Characters.js'
import {placeCard, tallyCapturedCards, returnWinner} from './utils/compareCards.js'
import {pickRandomCards} from './utils/cardPickRandom.js'

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
      player1Hand: pickRandomCards(characters, 'player1'),
      player2Hand: pickRandomCards(characters, 'player2'),
      player1Turn: true,
      board: [...Array(9).fill({})],
      player1Total: 5,
      player2Total: 5,
    }
    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.handleSquareSelection = this.handleSquareSelection.bind(this)
  }

  handleResetGame() {

  }

  handleCardSelection(card) {
      this.setState({
        cardSelected: card,
      })
  }

  handleSquareSelection(square) {
    if (this.state.cardSelected == null) return

    const isSquareOccupied = this.state.board.some((val, index) =>
      (square === index) && Object.keys(val).length > 0)
    const card = this.state.cardSelected
    const isPlayerOne = this.state.player1Turn


    if (card && !isSquareOccupied) {

      this.setState({
        board: this.state.board.map((val,index)=> {
          if (index === square) {
            return Object.assign({},val,card)
          }
          return val
        }),
        player1Turn: !this.state.player1Turn,
        player1Total: this.state.player1Total += this.state.player1Hand.length,
        player2Total: this.state.player2Total += this.state.player2Hand.length,
        selectedSquare: null,
        selectedCard: null
      })

      isPlayerOne ?
        this.state.player1Hand.map((c,i)=> c.uuid === card.uuid ? this.state.player1Hand.splice(i, 1):c)
        :this.state.player2Hand.map((c,i)=> c)

      placeCard(this.state.board, card, square)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const isBoardFilled = this.state.board.filter((val, index) => Object.keys(val).length > 0)
    const isPlayerOne = this.state.player1Turn

    if (prevState.board !== this.state.board && !this.state.player1Turn && isBoardFilled.length !== 9) {
      console.log(this.state.board)
      const isOccupied = sq => this.state.board.some((val, index) => (sq === index) && Object.keys(val).length > 0)
      let randomSquare = Math.floor(Math.random()*9)

      while(isOccupied(randomSquare)) {
        randomSquare = Math.floor(Math.random()*9)
      }

      const hand = this.state.player2Hand
      const amountOfCardsInHand = hand.length
      const randomCardFromHand = hand[Math.floor(Math.random()*amountOfCardsInHand)]

      isPlayerOne ?
        this.state.player1Hand.map((c,i)=>c)
        :this.state.player2Hand.map((c,i)=> c.uuid === randomCardFromHand.uuid ? this.state.player2Hand.splice(i, 1):c)

      this.setState({
        board: this.state.board.map((val,index)=> {
          if (index === randomSquare) {
            return Object.assign({},val,randomCardFromHand)
          }
          return val
        }),
        player1Turn: !this.state.player1Turn,
        player1Total: this.state.player1Total += this.state.player1Hand.length,
        player2Total: this.state.player2Total += this.state.player2Hand.length,
      })
      //
      //
      placeCard(this.state.board, randomCardFromHand, randomSquare)

    }
  }


  render(){
    const { playerOneTotal, playerTwoTotal } = tallyCapturedCards(this.state.board)
    const player1DisplayTotal = playerOneTotal + this.state.player1Hand.length
    const player2DisplayTotal = playerTwoTotal + this.state.player2Hand.length

    const isBoardFilled = this.state.board.filter((val, index) => Object.keys(val).length > 0)

    return (
      <div>
        {isBoardFilled.length === 9 ? <WinnerModal onClick={this.handleResetGame} winner={returnWinner(this.state.board)}/>:undefined}
        <Panel
          displayText={'Player One: ' + player1DisplayTotal}
          hidden={false}
          hand={this.state.player1Hand}
          handleCardSelection={this.handleCardSelection}
          playerTurn={this.state.player1Turn}
          canClick={true}
        />
        <CenterPanel>
          <Board
            displayText={this.state.player1Turn ? 'Player One\'s Turn':'Player Two\'s Turn'}
            gameState={this.state.board}
            handleSquareSelection={this.handleSquareSelection}
            canClick={this.state.player1Turn}
          />
        </CenterPanel>
        <Panel
          displayText={'Player Two: ' + player2DisplayTotal}
          hidden={true}
          hand={this.state.player2Hand}
          playerTurn={this.state.player1Turn}
          canClick={false}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))



