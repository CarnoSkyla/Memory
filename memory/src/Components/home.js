import React, { useState } from 'react'
import { useSelector, connect } from 'react-redux'

import Astro1 from '../Images/astro1.png'
import Astro2 from '../Images/astro2.png'

import '../Stylesheets/home.css'

const HomeScreen = () => {

    let players = useSelector((state) => state.user);
    console.log(players);
    const [playerTurn, setPlayerTurn] = useState("player1");

    return (
        <div className='container'>
            <div className='container__navigation'>
                <div className='container__navigation--empty'>

                </div>
                <div className='container__navigation--heading-wrapper'>
                    <h1>Memory</h1>
                </div>
                <div className='container__navigation--exit-btn-wrapper'>
                    <button className='btn restart-btn'>Restart Game</button>
                    <button className='btn exit-btn'>Exit Game</button>
                </div>
            </div>
            <div className="container__main-game--content">
                <div className="container__main-game--content-player1">
                    <img src={Astro1} />
                    <h3>Sibu</h3>
                    <p>Score: 10</p>
                    {
                        playerTurn === "player1" && 
                        <button className="btn btn-turn">Its Your Turn</button>
                    }
                </div>
                <div className='container__main-game--content__game'>
                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                        <div className="container__game--grid">
                            <div className="container__game--grid-sub-back">
                                <h2>Sibu</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container__main-game--content-player1">
                    <img src={Astro2} />
                    <h3>Sibu</h3>
                    <p>Score: 10</p>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen