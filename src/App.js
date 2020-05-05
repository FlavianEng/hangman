import React, { Component } from 'react'
import './css/App.min.css'
import Nav, { MODES_LIST } from './Nav'
import GameOutput from './GameOutput'

class App extends Component {
  state = {
    attempts: 0
  }


  render() {
    const { attempts } = this.state
    const plurial = attempts > 1
    return (
      <div className="container" >
        <Nav title="Hangman" modeNames={MODES_LIST} />
        <GameOutput attempts={plurial, attempts} />
      </div>
    )
  }
}

export default App