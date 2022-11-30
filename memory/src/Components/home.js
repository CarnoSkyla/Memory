import React, { useState } from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'

import Astro1 from '../Images/astro1.png'
import Astro2 from '../Images/astro2.png'
import { changeScore, resetScore } from '../Redux/Actions/scoreAction'

import '../Stylesheets/home.css'

const HomeScreen = () => {

    let {players} = useSelector((state) => state.user);
    let {score, count} = useSelector((state) => state.score)

    const dispatch = useDispatch();

    const [playerTurn, setPlayerTurn] = useState("player1");
    const [matched, setMatched] = useState(true);

    const revealCard = (cardId) => {
        const card = document.getElementById(`card-${cardId}`)
        card.style = 'transform: rotateY(180deg)'

        changePlayer(cardId)
    }

    const changePlayer = (cardId) => {
        const card = document.getElementById(`card-${cardId}`)
        let turns = []

        turns.push(...cardId)
        console.log(turns);
        setMatched(true)

        if (turns[0] === '2' && !matched) {
             setTimeout(() => {
                alert('Tough luck ' + players[0].player1 + ',its ' + players[0].player2 + ' turn')
             }, 1000);
            setPlayerTurn("player2")
        } else if(turns[0] === '2' && matched) {
            dispatch(changeScore({player: "player1"}))
        }
        if (playerTurn === "player2" && !matched) {
            parseInt(turns[0] - 1);
            if (turns == 0) {
                setPlayerTurn("player1")
            }
        }
    }

    const resetGame = () => {
        dispatch(resetScore())
    }

    return (
        <div className='container'>
            <div className='container__navigation'>
                <div className='container__navigation--empty'>

                </div>
                <div className='container__navigation--heading-wrapper'>
                    <h1>Memory</h1>
                </div>
                <div className='container__navigation--exit-btn-wrapper'>
                    <button className='btn restart-btn' onClick={resetGame}>Restart Game</button>
                    <button className='btn exit-btn'>Exit Game</button>
                </div>
            </div>
            <div className="container__main-game--content">
                <div className="container__main-game--content-player1">
                    <img src={Astro1} />
                    <h3>{players[0].player1}</h3>
                    <p>Score: {score[0].player1}</p>
                    {
                        playerTurn === "player1" && 
                        <button className="btn btn-turn">Its Your Turn</button>
                    }
                </div>
                <div className='container__main-game--content__game'>
                    <div className="container__game">
                        <div className="container__game--grid" id='card-1' onClick={(e) => revealCard(e.target.id.split("-")[1])}>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id="card-2" onClick={(e) => revealCard(e.target.id.split("-")[1])}>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id="card-2" onClick={(e) => revealCard(e.target.id.split("-")[1])}>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid" id>
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container__main-game--content-player1">
                    <img src={Astro2} />
                    <h3>{players[0].player2}</h3>
                    <p>Score: {score[0].player2}</p>
                    {
                        playerTurn === "player2" && 
                        <button className="btn btn-turn">Its Your Turn</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default HomeScreen