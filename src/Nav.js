import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ modeNames, onClick }) => (
    <div className="modeContainer">
        <ul>
            {modeNames.map(({ id, name }) =>
                (
                    <li key={id} onClick={() => onClick(id)}>{name}</li>
                ))}
        </ul>
    </div>
)

Nav.propTypes = {
    modeNames: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}

export default Nav

export const MODES_LIST = [
    { id: 0, name: 'Classique' },
    { id: 1, name: 'Record' },
    // { id: 2, name: 'Multijoueur', }
]