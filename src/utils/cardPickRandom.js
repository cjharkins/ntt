const uuid = () => {
  const alpha = ['a','b','c','d','e','f']
  const nums = [1,2,3,4,5,6,7,8,9,0]
  let id = ''

  for (let i = 0; i < 8; i++) {
    id += alpha[Math.floor(Math.random() * alpha.length)]
    id += alpha[Math.floor(Math.random() * alpha.length)]
    id += nums[Math.floor(Math.random() * nums.length)]
    id += nums[Math.floor(Math.random() * nums.length)]
  }

  return id
}

const pickRandomCards = (cardOptions, owner) => {
  const deck = []

  cardOptions.map(card => {
    const randomNumber = Math.floor(Math.random() * (cardOptions.length))
    deck.push(cardOptions[randomNumber])
    return card
  })

  deck.length = 5


  return deck.map(i=> Object.assign({}, i, {
    uuid: uuid(),
    owner
  }))
}

const pickRandomCard = (cardOptions) => {
  return Math.floor(Math.random() * cardOptions.length)
}

const pickRandomSquare = (squareOptions) => {
  return Math.floor(Math.random() * squareOptions.length)
}

module.exports.pickRandomCards = pickRandomCards
module.exports.pickRandomCard = pickRandomCard
module.exports.pickRandomSquare = pickRandomSquare
