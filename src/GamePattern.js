import React from 'react'
import PropTypes from 'prop-types'

const GamePattern = ({ feedback, letter }) => (
    <p>
        {feedback === 'unfound' ? "_" : letter}
    </p>
)


GamePattern.propTypes = {
    feedback: PropTypes.oneOf([
        'founded',
        'unfound'
    ]).isRequired,
    letter: PropTypes.string.isRequired
}

export default GamePattern