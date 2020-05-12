import React from 'react'
import PropTypes from 'prop-types'

const HangmanOutput = ({ plurial, attempts, winStatus }) => (
    <div className="hangmanOutput">
        <p>Nb de tentative{plurial && "s"} : {attempts}</p>
        {winStatus &&
            <div className="win">
                <p><span aria-label="trophée" role="img">🏆</span> Tu as enfin gagné !</p>
                {/* <p className="win_little">(Je commençais à perdre patience)</p> */}
                <p className="win_little">(Tu peux faire mieux champion !)</p>
            </div>}
    </div>
)

HangmanOutput.propTypes = {
    attempts: PropTypes.number.isRequired,
    winStatus: PropTypes.bool.isRequired
}

export default HangmanOutput

