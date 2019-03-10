import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/Board.js'
import styled from 'styled-components'

const LeftPanel = styled.div``
const CenterPanel = styled.div``
const RightPanel = styled.div``

class App extends React.Component {
  render(){
    return (
      <div>
        <LeftPanel />
        <CenterPanel>
          <Board />
        </CenterPanel>
        <RightPanel />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
