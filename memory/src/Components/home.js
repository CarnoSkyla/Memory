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
        const card = document.getElementById(cardId)
        card.style = 'transform: rotateY(180deg)'

        changePlayer(cardId)
    }

    const changePlayer = (cardId) => {
        const card = document.getElementById(cardId)
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
            turns = []
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
                        <div className="container__game--grid" id="pip-black-2" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-1">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-3" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-2">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-4" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-3">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-5" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-4">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-6" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-5">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-7" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-6">
                                
                            </div>
                        </div>
                    </div>

                    <div className="container__game">
                        <div className="container__game--grid" id="pip-black-8" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-7">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-9" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-8">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-10" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-9">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-j" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-10">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-k" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-11">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="pip-black-q" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-12">
                                
                            </div>
                        </div>
                    </div>

                    <div className="container__game">
                        <div className="container__game--grid" id="pip-black-a" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-pip-card-13">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-2" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-1">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-3" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-2">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-4" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-3">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-5" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-4">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-6" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-5">
                                
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id="heart-red-7" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-6">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-8" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-7">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-9" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-8">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-10" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-9">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-j" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-10">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-k" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-11">
                                
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id="heart-red-q" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-12">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="heart-red-a" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-heart-card-13">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-2" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-1">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-3" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-2">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-4" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-3">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-5" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-4">
                                
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id="diamond-red-6" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-5">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-7" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-6">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-8" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-7">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-9" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-8">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-10" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-9">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-j" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-10">
                                
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id="diamond-red-k" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-11">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-q" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-12">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="diamond-red-a" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-diamond-card-3">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-2" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-1">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-3" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-2">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-4" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-3">
                                
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id="spade-black-5" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-4">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-6" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-5">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-7" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-6">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-8" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-7">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-9" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-8">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-10" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-9">
                                
                            </div>
                        </div>
                    </div>
                    <div className="container__game">
                        <div className="container__game--grid" id="spade-black-j" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-10">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-k" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-11">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-q" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-12">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="spade-black-a" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-spade-card-13">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="joker-black" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-joker-card-black">
                                
                            </div>
                        </div>
                        <div className="container__game--grid" id="joker-red" onClick={(e) => revealCard(e.target.id)}>
                            <div className="container__game--grid-sub-back" id="sub-joker-card-red">
                                
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