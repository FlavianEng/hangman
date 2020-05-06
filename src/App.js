import React, { Component } from 'react'
import { scaleRotate as Menu } from 'react-burger-menu'
import './App.scss'
import Nav, { MODES_LIST } from './Nav'
import HangmanOutput from './HangmanOutput'
import GamePattern from './GamePattern'
import Alphabet, { ALPHABET } from './Alphabet'

class App extends Component {
  state = {
    title: "Hangman",
    attempts: 0,
    letters: this.generatePattern("Exploration")
  }

  generatePattern(word) {
    let letters = word.toUpperCase()
    letters = letters.split('')
    return letters
  }

  render() {
    const { attempts, letters, title } = this.state
    const plurialBool = attempts > 1
    return (
      <div className="container" id="outer-container">
        <div className="nav">
          <h1>{title}</h1>
          <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right >
            <Nav title="Hangman" modeNames={MODES_LIST} />
          </Menu>
        </div>
        <div id="page-wrap">
          <div className="gameOutput">
            <HangmanOutput attempts={attempts} plurial={plurialBool} />
            <div className="letters">
              {letters.map((letter, index) => (
                <GamePattern
                  letter={letter}
                  key={index}
                  feedback="unfound"
                />
              ))}
            </div>
          </div>
          <Alphabet characters={ALPHABET} />
        </div>
      </div>
    )
  }
}

export default App