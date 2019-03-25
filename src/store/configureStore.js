import {createStore} from "redux";
import {pickRandomCards} from "../utils/cardPickRandom";
import characters from "../characters/Characters";

const initialState = {
  cardSelected: null,
  squareSelected: null,
  player1Hand: [],
  player2Hand: [],
  player1Turn: true,
  board: [...Array(9).fill({})],
  player1Total: 0,
  player2Total: 0,
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case "INITIALIZE_GAME":
      const player1Hand = pickRandomCards(characters, 'player1')
      const player2Hand = pickRandomCards(characters, 'player2')
      const player1Total = player1Hand.length
      const player2Total = player2Hand.length

      return Object.assign({}, state, {
        player1Hand,
        player2Hand,
        player1Total,
        player2Total
      })
    case "REMOVE_CARD":
      break
    case "INCREMENT_SCORE":
      break
    case "DECREMENT_SCORE":
      break
    case "CARD_SELECTED":
      break
    case "SQUARE_SELECTED":
      break
    default:
      return null
  }

}

const store = createStore(rootReducer)

export default store
