class Character {
  constructor(_id, image, cardName, topValue, rightValue, bottomValue, leftValue) {
      this._id = _id
      this.image = image
      this.cardName = cardName
      this.topValue = topValue
      this.rightValue = rightValue
      this.bottomValue = bottomValue
      this.leftValue = leftValue
  }
}

const Hashirama = new Character('n1', require('../assets/images/shippuden_hashirama.jpg'), 'Hashirama Senju', '6', 'A', '3', '1')
const Itachi = new Character('n2', require('../assets/images/shippuden_itachi.jpg'), 'Itachi Uchiha', 'A', 'A', 'A', 'A')
const Kakashi = new Character('n3', require('../assets/images/shippuden_kakashi.jpg'), 'Kakashi Hatake', 'A', 'A', 'A', 'A')
const Kurama = new Character('n4', require('../assets/images/tailed_beast_kurama.png'), 'Kurama (Nine Tails)', 'A', 'A', 'A', 'A')
const Madara = new Character('n5', require('../assets/images/shippuden_madara.jpg'), 'Madara Uchiha', 'A', 'A', 'A', 'A')
const Naruto = new Character('n6', require('../assets/images/shippuden_naruto.png'), 'Naruto Uzumaki', 'A', '9', '2', '4')
const Obito = new Character('n7', require('../assets/images/shippuden_obito.png'), 'Obito Uchiha', 'A', 'A', 'A', 'A')
const Sakura = new Character('n8', require('../assets/images/shippuden_sakura.png'), 'Sakura Harano', 'A', 'A', 'A', 'A')
const Sasuke = new Character('n9', require('../assets/images/shippuden_sasuke.png'), 'Sasuke Uchiha', 'A', 'A', 'A', 'A')

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
