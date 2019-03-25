class Character {
  constructor(_id, image, cardName, ranks) {
      this._id = _id
      this.image = image
      this.cardName = cardName
      // ranks are numerical values displaying [north, east, south, west]
      this.ranks = ranks
  }
}

const Hashirama = new Character('n1', require('../assets/images/shippuden_hashirama.jpg'), 'Hashirama Senju', [4,5,3,1])
const Itachi = new Character('n2', require('../assets/images/shippuden_itachi.jpg'), 'Itachi Uchiha', [3,3,1,6])
const Kakashi = new Character('n3', require('../assets/images/shippuden_kakashi.jpg'), 'Kakashi Hatake', [5,1,5,2])
const Kurama = new Character('n4', require('../assets/images/tailed_beast_kurama.png'), 'Kurama (Nine Tails)', [6,1,5,1])
const Madara = new Character('n5', require('../assets/images/shippuden_madara.jpg'), 'Madara Uchiha', [2,1,5,5])
const Naruto = new Character('n6', require('../assets/images/shippuden_naruto.png'), 'Naruto Uzumaki', [5,1,1,6])
const Obito = new Character('n7', require('../assets/images/shippuden_obito.png'), 'Obito Uchiha', [2,4,3,1])
const Sakura = new Character('n8', require('../assets/images/shippuden_sakura.png'), 'Sakura Harano', [3,3,6,1])
const Sasuke = new Character('n9', require('../assets/images/shippuden_sasuke.jpg'), 'Sasuke Uchiha', [6,1,3,3])

const characters = [
  Hashirama,
  Itachi,
  Kakashi,
  Kurama,
  Madara,
  Naruto,
  Obito,
  Sakura,
  Sasuke,
]

export default characters
