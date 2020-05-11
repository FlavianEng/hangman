import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => (
    <div className="button">
        <button onClick={() => onClick()}>{text}</button>
    </div>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
