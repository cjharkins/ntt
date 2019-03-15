import React from 'react'
import Card from './Card.js'
import Characters from '../characters/Characters.js'
import styled from 'styled-components'

const StyledPanelContainer = styled.div`
  width: 450px;
  display: inline-block;
  margin: 100px 15px 0;
`

export default class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.selectCard = this.selectCard.bind(this)
  }

  selectCard(card) {
    this.props.handleCardSelection(card)
  }

  render() {
    return (
      <StyledPanelContainer>
        <Card
          inHand={true}
          onClick={this.selectCard}
          info={ Characters[1] }
        />
        <Card
          inHand={true}
          onClick={this.selectCard}
          info={ Characters[1] }
        />
        <Card
          inHand={true}
          onClick={this.selectCard}
          info={ Characters[2] }
        />
        <Card
          inHand={true}
          onClick={this.selectCard}
          info={ Characters[4] }
        />
        <Card
          inHand={true}
          onClick={this.selectCard}
          info={ Characters[5] }
        />
      </StyledPanelContainer>
    )
  }
}
