import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
`

const InfoBox = styled.div`
  width: 500px;
  height: 300px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  margin: 100px auto;
`

const InfoText = styled.h2`
  text-align: center;
  margin-top: 125px;
`

const WinnerModal = props => (
  <ModalContainer>
    <InfoBox>
      <InfoText>
        {props.winner}
      </InfoText>
      <p onClick={props.onClick}>Restart Game</p>
    </InfoBox>
  </ModalContainer>
)

export default WinnerModal
