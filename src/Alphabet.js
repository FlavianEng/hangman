import React from 'react'
import PropTypes from 'prop-types'

const Alphabet = ({ letter, onClick, status }) => (
    <li className={`${status}`} onClick={() => onClick(letter)}>{letter}</li>
)

Alphabet.propTypes = {
    letter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf([
        'clicked',
        'clickable'
    ]).isRequired
}

export default Alphabet