import React from 'react'
import Card from './Card.js'
import styled from 'styled-components'
import Header from './Header.js'


const StyledPanelContainer = styled.div`
  width: 425px;
  display: inline-block;
  margin: 0px 15px 0;
  vertical-align: top;
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
        <Header
          displayText={this.props.displayText}
        />
        {
          this.props.hand && this.props.hand.map((card,i) =>
            (<Card
                hidden={this.props.hidden}
                owner={this.props.playedBy}
                inHand={true}
                key={i}
                onClick={this.props.canClick ? this.selectCard:undefined}
                info={ card }
                canClick={this.props.canClick}
              />)
          )
        }
      </StyledPanelContainer>
    )
  }
}
