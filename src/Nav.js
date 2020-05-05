import React from 'react'
import PropTypes from 'prop-types'
import './css/Nav.min.css'

const Nav = ({ title, modeNames }) => (
    <div className="nav">
        <h1>{title}</h1>
        <div className="modeContainer">
            {modeNames.map(({ id, name }) =>
                (
                    <li key={id}>{name}</li>
                ))}
        </div>
    </div>
)

Nav.propTypes = {
    title: PropTypes.string.isRequired,
    modeNames: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    )
}

export default Nav

export const MODES_LIST = [
    { id: 0, name: 'Solo classique' },
    { id: 1, name: 'Solo record' },
    { id: 2, name: '2 joueurs' }
]