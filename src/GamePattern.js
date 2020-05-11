import React from 'react'
import PropTypes from 'prop-types'

const GamePattern = ({ feedback, letter }) => (
    <p>
        {feedback === 'hidden' ? "_" : letter}
    </p>
)


GamePattern.propTypes = {
    feedback: PropTypes.oneOf([
        'visible',
        'hidden'
    ]).isRequired,
    letter: PropTypes.string.isRequired
}

export default GamePattern