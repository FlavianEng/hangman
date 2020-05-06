import React from 'react'
import PropTypes from 'prop-types'

const Alphabet = ({ characters }) => (
    <div className="keyboard">
        {characters.map(({ id, character }) => (
            <li key={id}>{character}</li>
        ))
        }
    </div>
)

Alphabet.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            character: PropTypes.string.isRequired
        })
    )
}

export default Alphabet

export const ALPHABET = [
    { id: 0, character: 'A' },
    { id: 1, character: 'B' },
    { id: 2, character: 'C' },
    { id: 3, character: 'D' },
    { id: 4, character: 'E' },
    { id: 5, character: 'F' },
    { id: 6, character: 'G' },
    { id: 7, character: 'H' },
    { id: 8, character: 'I' },
    { id: 9, character: 'J' },
    { id: 10, character: 'K' },
    { id: 11, character: 'L' },
    { id: 12, character: 'M' },
    { id: 13, character: 'N' },
    { id: 14, character: 'O' },
    { id: 15, character: 'P' },
    { id: 16, character: 'Q' },
    { id: 17, character: 'R' },
    { id: 18, character: 'S' },
    { id: 19, character: 'T' },
    { id: 20, character: 'U' },
    { id: 21, character: 'V' },
    { id: 22, character: 'W' },
    { id: 23, character: 'X' },
    { id: 24, character: 'Y' },
    { id: 25, character: 'Z' }
]