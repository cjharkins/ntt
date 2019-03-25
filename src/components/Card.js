import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    background-color: ${ props => props.owner === 'player1' ? `#2196f3`:`tomato` };
    // display: ${ props => props.inHand ? 'block':'inline-block'};
    margin-right: ${ props => props.inHand ? '4px':'6px'};
    // box-shadow: ${ props => props.inHand ? '0 3px 5px 1px rgba(0,0,0,0.4)':'0 0 0 0 rgba(0,0,0,0'};
`

const CardOverlayAngleTop = styled.div`
    background-color: ${props => props.owner === 'player1' ? `#2196f3`:`tomato`};
  `
const CardOverlayAngleBottom = styled.div`
    background-color: ${props => props.owner === 'player1' ? `#2196f3`:`tomato`};
  `
const CardRanks = styled.div`
  background-color: ${props => props.owner === 'player1' ? `#2196f3`:`tomato`};
`
const CardBottomPanel = styled.div`
  background-color: ${props => props.owner === 'player1' ? `#2196f3`:`tomato`};
`
const ShadowDiv = styled.div`
  background: ${props => props.hide ? 'linear-gradient(0deg, rgba(3,1,1,1) 0%, rgba(47,17,17,1) 73%, rgba(70,25,25,1) 91%, rgba(83,30,30,1) 100%);':'transparent'};
  height: 250px;
  position: absolute;
  width: 200px;
  z-index: 999;
  top:0;
  left:0;
`

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.inHand){
      const card = this.props
      this.props.onClick(card.info)
    }
  }

  render(){
    if (this.props.info) {
      return (
        <CardWrapper
          inHand={this.props.inHand}
          className="card"
          owner={this.props.info.owner}
          onClick={this.props.canClick ? this.handleClick:undefined}
          id={this.props.info._id}
          value={this.props}
        >
          <div className="card-overlay-top">
            <CardOverlayAngleTop
              owner={this.props.info.owner}
              className="card-overlay-angle-top"
            />
            <CardRanks
              owner={this.props.info.owner}
              className="card-ranks">
              <p>{convertTenToA(this.props.info.ranks && this.props.info.ranks[0])}</p>
              <p>
                {convertTenToA(this.props.info.ranks && this.props.info.ranks[3])}
                &nbsp; &nbsp; &nbsp;
                {convertTenToA(this.props.info.ranks && this.props.info.ranks[1])}
              </p>
              <p>{convertTenToA(this.props.info.ranks && this.props.info.ranks[2])}</p>
            </CardRanks>
          </div>
          <section className="card-img">
            <img width="100%" src={this.props.info.image} alt=""/>
            <CardOverlayAngleBottom
              owner={this.props.info.owner}
              className="card-overlay-angle-bottom"/>
            <CardBottomPanel
              owner={this.props.info.owner}
              className="card-bottom-panel">
              <div className="card-title">
                <h3>{this.props.info.cardName}</h3>
              </div>
            </CardBottomPanel>
          </section>
          <ShadowDiv
            className={this.props.inHand && this.props.info.owner === 'player1' ? "shiny":''}
            hide={this.props.hidden}
          >
            <img className="card-logo"  src={this.props.hidden ? require('../assets/images/hidden_leaf_logo.png'):""} alt=""/>
          </ShadowDiv>
        </CardWrapper>
      )
  }
    else {
      return <div></div>
    }
  }
}


function convertTenToA(num) {
  return num === 10 ? 'A':num
}

