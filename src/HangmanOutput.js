import React from 'react'
import PropTypes from 'prop-types'



const HangmanOutput = ({ plurial, attempts, winStatus, mode, lostStatus }) => (
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
            <div className="winLostStatus">
                <p><span aria-label="trophée" role="img">🏆</span> Tu as enfin gagné !</p>
                <p className="winLostStatus_little">(J'aurais parié que tu allais perdre)</p>
            </div>}

        {lostStatus &&
            <div className="winLostStatus">
                <p><span aria-label="Looser !" role="img">💩</span> Tu as perdu !</p>
                <p className="winLostStatus_little">(Même ma plante aurait fait mieux)</p>
            </div>
        }
    </div>
)

HangmanOutput.propTypes = {
    attempts: PropTypes.number.isRequired,
    winStatus: PropTypes.bool.isRequired,
    lostStatus: PropTypes.bool.isRequired,
    mode: PropTypes.number.isRequired
}

export default HangmanOutput

