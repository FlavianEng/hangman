import React from 'react'
import PropTypes from 'prop-types'



const HangmanOutput = ({ plurial, attempts, winStatus, mode }) => (
    <div className="hangmanOutput">
        {mode === 1 ?
            (<p>
                Mauvaise{plurial && "s"} tentative{plurial && "s"} : {attempts}
            </p>) :
            (
                <canvas id="hangmanCanvas">
                    Tentative{plurial && "s"} restante{plurial && "s"} : {11 - attempts}
                </canvas>
            )}
        {winStatus &&
            <div className="win">
                <p><span aria-label="trophée" role="img">🏆</span> Tu as enfin gagné !</p>
                <p className="win_little">(Je commençais à perdre patience)</p>
            </div>}
    </div>
)

HangmanOutput.propTypes = {
    attempts: PropTypes.number.isRequired,
    winStatus: PropTypes.bool.isRequired,
    mode: PropTypes.number.isRequired
}

export default HangmanOutput

