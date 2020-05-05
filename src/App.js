import React from 'react'
import './css/App.min.css'
import Nav, { MODES_LIST } from './Nav'

function App() {
  return (
    <div className="container">
      <Nav title="Hangman" modeNames={MODES_LIST} />
    </div>
  )
}

export default App