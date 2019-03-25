function compareCards(direction,boardState, atkCard, atkPos) {
  if (!atkCard || !atkCard.ranks) return

  let atkVal
  let defPos
  let defCard
  let defVal

  switch(direction) {
    case 'north':
      atkVal = atkCard.ranks[0]
      defPos = atkPos - 3
      defCard = defPos >= 0 && defPos <= 8 && boardState[defPos]
      defVal = defCard.ranks ? defCard.ranks[2]:0
      break;
    case 'south':
      atkVal = atkCard.ranks[2]
      defPos = atkPos + 3
      defCard = defPos >= 0 && defPos <= 8 && boardState[defPos]
      defVal = defCard.ranks ? defCard.ranks[0]:0
      break;
    case 'east':
      atkVal = atkCard.ranks[1]
      defPos = (atkPos + 1) === 3 || (atkPos + 1) === 6? atkPos:atkPos + 1
      defCard = defPos >= 0 && defPos <= 8 && boardState[defPos]
      defVal = defCard.ranks ? defCard.ranks[3]:0
      break;
    case 'west':
      atkVal = atkCard.ranks[3]
      defPos = (atkPos - 1) === 2 || (atkPos - 1) === 5? atkPos:atkPos - 1
      defCard =  defPos >= 0 && defPos <= 8 && boardState[defPos]
      defVal = defCard.ranks ? defCard.ranks[1]:0
      break;
    default:

      break;
  }

  return [{atkCard,atkVal,atkPos}, {defCard,defVal,defPos}]
}

function placeCard(boardState, card, pos) {
  const directions = ['north', 'east', 'south', 'west']
  const comparisons = {}

  for(let val of directions) {
    comparisons[val] = compareCards(val, boardState, card, pos)
  }

  for(let direction in comparisons) {
    let result = comparisons[direction]

    let { atkCard, atkVal } = result[0]
    let { defCard, defVal } = result[1]

    if (defCard.ranks && atkVal > defVal) {
      defCard.owner = atkCard.owner
    }
  }
}

function tallyCapturedCards(boardState){
  const playerOneTotal = boardState.filter(card => card.owner === 'player1').length
  const playerTwoTotal = boardState.filter(card => card.owner === 'player2').length

  return {
    playerOneTotal,
    playerTwoTotal
  }
}

function returnWinner(boardState) {
  const { playerOneTotal, playerTwoTotal } = tallyCapturedCards(boardState)
  const p1Win = playerOneTotal > playerTwoTotal || false
  const p2Win = playerTwoTotal > playerOneTotal || false
  const tie = playerOneTotal === playerTwoTotal || false

  if (p1Win) { return "Player One Wins!" }
  if (p2Win) { return "Player Two Wins!" }
  if (tie) { return "Tie Game!" }
}

module.exports.placeCard = placeCard
module.exports.returnWinner = returnWinner
module.exports.compareCards = compareCards
module.exports.tallyCapturedCards = tallyCapturedCards
