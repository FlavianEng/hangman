import React, { Component } from 'react'
import { push as Menu } from 'react-burger-menu'
import './App.scss'
import Nav, { MODES_LIST } from './Nav'
import HangmanOutput from './HangmanOutput'
import GamePattern from './GamePattern'
import Alphabet from './Alphabet'
import Button from './Button'

const KEYLETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  get initialState() {
    return {
      title: "Hangman 💀",
      lettersKey: this.generateKeyboard(),
      attempts: 0,
      wordLetters: this.generatePattern("a"),
      currentLetter: "",
      lettersFound: [],
      winCondition: this.generateWinScore("a"),
      clickedKeys: []
    };
  }

  generatePattern(word) {
    const result = []
    let str = word.toUpperCase()
    str = str.split('')
    for (let letter of str) {
      result.push(letter)
    }
    return result
  }

  generateKeyboard() {
    const result = []
    for (let letter of KEYLETTERS) {
      result.push(letter)
    }
    return result
  }

  generateWinScore(word) {
    let referenceWord = word.toUpperCase()
    referenceWord = referenceWord.split('')
    let result = 0
    const list = []
    for (let letter of referenceWord) {
      if (list.includes(letter)) {
      } else {
        result = result + 1
        list.push(letter)
      }
    }
    return result
  }

  getFeedbackForPattern(letter) {
    const { lettersFound } = this.state

    const letterMatched = lettersFound.includes(letter)
    for (let character of lettersFound) {
      if (character === letter) {
        return letterMatched ? 'visible' : 'hidden'
      }
    }
    return letterMatched ? 'visible' : 'hidden'
  }

  getFeedbackForKeys(letter) {
    const { clickedKeys } = this.state
    const keysMatched = clickedKeys.includes(letter)
    for (let key of clickedKeys) {
      if (key === letter) {
        return keysMatched ? 'clicked' : 'clickable'
      }
    }
    return keysMatched ? 'clicked' : 'clickable'
  }

  handleLetterClick = letter => {
    const { wordLetters, lettersFound, attempts, clickedKeys } = this.state
    const newAttempts = attempts + 1;
    this.setState({ currentLetter: letter, attempts: newAttempts, clickedKeys: [...clickedKeys, letter] })
    if (wordLetters.includes(letter)) {
      this.setState({ lettersFound: [...lettersFound, letter] })
    }
  }

  rebootGame = () => {
    this.setState(this.initialState);
  }

  render() {
    const { title, attempts, wordLetters, lettersKey, lettersFound, winCondition } = this.state
    const plurialBool = attempts > 1
    const won = lettersFound.length === winCondition
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
            <HangmanOutput attempts={attempts} plurial={plurialBool} winStatus={won} />
            <div className="letters">
              {wordLetters.map((letter, index) => (
                <GamePattern
                  key={index}
                  letter={letter}
                  feedback={this.getFeedbackForPattern(letter)}
                />
              ))}
            </div>
          </div>
          {!won ? (<div className="keyboard">
            {lettersKey.map((letter, index) => (
              <Alphabet key={index} letter={letter} status={this.getFeedbackForKeys(letter)} onClick={this.handleLetterClick} />
            ))}
          </div>) : (<Button text="Rejouer 🎮" onClick={this.rebootGame} />)}
        </div>
      </div>
    )
  }
}

export default App