import React from 'react'
import PropTypes from 'prop-types'

const HangmanOutput = ({ plurial, attempts }) => (
    <div className="hangmanOutput">
        <p>Nb de tentative{plurial && "s"} : {attempts}</p>
    </div>
)

HangmanOutput.propTypes = {
    attempts: PropTypes.number.isRequired
}

export default HangmanOutput

