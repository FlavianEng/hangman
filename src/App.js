import React, { Component } from 'react'
import { push as Menu } from 'react-burger-menu'
import './App.scss'
import Nav, { MODES_LIST } from './Nav'
import HangmanOutput from './HangmanOutput'
import GamePattern from './GamePattern'
import Alphabet from './Alphabet'
import Button from './Button'
import { WORD_DICTIONNARY } from './wordDictionnary'

const KEYLETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState(this.chooseRandomWord());
  }

  initialState(theWord) {
    return {
      title: "Hangman 💀",
      mode: 0,
      lettersKey: this.generateKeyboard(),
      attempts: 0,
      wordLetters: this.generatePattern(theWord),
      currentLetter: "",
      lettersFound: [],
      winCondition: this.generateWinScore(theWord),
      clickedKeys: [],
    };
  }

  resetState(theWord) {
    return {
      lettersKey: this.generateKeyboard(),
      attempts: 0,
      wordLetters: this.generatePattern(theWord),
      currentLetter: "",
      lettersFound: [],
      winCondition: this.generateWinScore(theWord),
      clickedKeys: []
    };
  }

  chooseRandomWord() {
    let randomNumber = Math.floor(Math.random() * (WORD_DICTIONNARY.length - 0 + 1));
    return WORD_DICTIONNARY[randomNumber]
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
    this.setState({ currentLetter: letter, clickedKeys: [...clickedKeys, letter] })
    if (wordLetters.includes(letter)) {
      this.setState({ lettersFound: [...lettersFound, letter] })
    } else {
      const newAttempts = attempts + 1;
      this.setState({ attempts: newAttempts })
    }
  }

  rebootGame = () => {
    this.setState(this.resetState(this.chooseRandomWord()))
  }

  setGameMode = id => {
    this.setState({ mode: id })
  }

  componentDidMount() {
    const canvas = document.getElementById('hangmanCanvas')
    const ctx = canvas.getContext('2d')
    ctx.fillRect(0, 147, 110, 3)

    // SUPPRIMER EN DESSOUS
    ctx.fillRect(45, 50, 6, 150)
    ctx.fillRect(45, 50, 150, 3)
    ctx.fillRect(195, 50, 4, 20)
    ctx.beginPath()
    ctx.moveTo(50, 120)
    ctx.lineTo(147, 180)
    ctx.stroke()
    ctx.lineTo(146, 179)
    ctx.stroke()
    ctx.lineTo(145, 178)
    ctx.stroke()
    ctx.lineTo(144, 177)
    ctx.stroke()
    ctx.lineTo(143, 176)
    ctx.stroke()
    ctx.moveTo(100, 52)
    ctx.lineTo(50, 80)
    ctx.stroke()
    ctx.lineTo(49, 79)
    ctx.stroke()
    ctx.lineTo(48, 78)
    ctx.stroke()
    ctx.lineTo(47, 77)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(197, 80, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath()
    // SUPPRIMER EN DESSOUS
  }


  componentDidUpdate() {
    const { mode } = this.state
    const isZero = mode === 0
    if (isZero) {
      const { attempts } = this.state
      const canvas = document.getElementById('hangmanCanvas')
      const ctx = canvas.getContext('2d')

      // const maxAttempts = 11
      switch (attempts) {
        case 1:
          ctx.fillRect(45, 50, 6, 150)
          break
        case 2:
          ctx.fillRect(45, 50, 150, 3)
          break
        case 3:
          ctx.fillRect(195, 50, 6, 20)
          break
        case 4:
          ctx.beginPath()
          ctx.moveTo(50, 120)
          ctx.lineTo(147, 180)
          ctx.stroke()
          ctx.lineTo(146, 179)
          ctx.stroke();
          ctx.lineTo(145, 178)
          ctx.stroke()
          ctx.lineTo(144, 177)
          ctx.stroke()
          ctx.lineTo(143, 176)
          ctx.stroke()
          ctx.closePath()
          break
        case 5:
          ctx.beginPath()
          ctx.moveTo(100, 52)
          ctx.lineTo(50, 80)
          ctx.stroke()
          ctx.lineTo(49, 79)
          ctx.stroke()
          ctx.lineTo(48, 78)
          ctx.stroke()
          ctx.lineTo(47, 77)
          ctx.stroke()
          ctx.closePath()
          break
        case 6:
          ctx.beginPath();
          ctx.arc(197, 80, 10, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.closePath()
          break
        case 7:
          break
        default:
          console.log("IN THE DEFAULT")
      }
    } else { console.log('isZero FALSE') }
  }

  render() {
    const { title, attempts, wordLetters, lettersKey, lettersFound, winCondition, mode } = this.state
    const plurialBool = attempts > 1
    const won = lettersFound.length === winCondition
    return (
      <div className="container" id="outer-container">
        <div className="nav">
          <h1>{title}</h1>
          <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right >
            <Nav title="Hangman" onClick={this.setGameMode} modeNames={MODES_LIST} />
          </Menu>
        </div>
        <div id="page-wrap">
          <div className="gameOutput">
            <HangmanOutput attempts={attempts} plurial={plurialBool} winStatus={won} mode={mode} />
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