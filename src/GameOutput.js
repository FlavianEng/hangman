import React from 'react'
import PropTypes from 'prop-types'
import './css/GameOutput.min.css'

const GameOutput = ({ plurial, attempts }) => (
    <div className="gameOutput">
        <div className="hangmanOutput">
            <p>Nb de tentative{plurial && "s"} : {attempts}</p>
        </div>
        <div className="letters">

        </div>
    </div>
)

GameOutput.propTypes = {
    attempts: PropTypes.number.isRequired
}

export default GameOutput

