import React, { useEffect, useState } from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'

import Astro1 from '../Images/astro1.png'
import Astro2 from '../Images/astro2.png'
import { changeScore, changeTurns, resetScore, resetState } from '../Redux/Actions/scoreAction'
import { deletePlayer } from '../Redux/Actions/userAction'
import { useNavigate} from 'react-router-dom'

import '../Stylesheets/home.css'

const HomeScreen = () => {

    let { players } = useSelector((state) => state.user);
    let { score, success, turns } = useSelector((state) => state.score);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [playerTurn, setPlayerTurn] = useState("player1");
    const [matched, setMatched] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [usedCards, setUsedCards] = useState([])  

    useEffect(() => {
        if (!gameStarted) {
            let classname = document.getElementsByClassName('container__game--grid')

            for (let i = 0; i < classname.length; i++) {
                classname[i].style.transform = "scale(1)"
            }
            if (usedCards.length > 0) {
                for (let i = 0; i < usedCards.length; i++) {
                    
                    let remove = document.getElementById(usedCards[i].id)
                    remove.style = 'opacity: 1'
                    setPlayerTurn("player1")
                }
            }
        }
    }, [gameStarted, playerTurn])

    const changePlayerTurn = (turn) => {
        if (turn === "player1" && !matched) {
            setPlayerTurn("player2")
        } else if (turn === "player2" && !matched) {
            setPlayerTurn("player1")
        }
    }

    const revealCard = (cardId) => {
        let count = 0
        setGameStarted(true)

        const card = document.getElementById(cardId)
        card.style = 'transform: rotateY(180deg)'

        dispatch(changeTurns({ turn: count++, cardId: cardId }))
        changePlayer(cardId, count)
    }

    const changePlayer = (cardId, turn) => {
        const card = document.getElementById(cardId)

        if (turns.length === 2) {
            let firstCardColor = turns[0].cardId.split("-")[1]
            let firstCardnumber = turns[0].cardId.split("-")[2]

            let secondCardColor = turns[1].cardId.split("-")[1]
            let secondCardnumber = turns[1].cardId.split("-")[2]

            let card1 = document.getElementById(turns[0].cardId)
            let card2 = document.getElementById(turns[1].cardId)

            let game = document.getElementById('memory-game')

            if (firstCardColor === secondCardColor && firstCardnumber === secondCardnumber) {
                alert('Match')
                console.log(playerTurn)
                dispatch(changeScore({ player: playerTurn }))

                setMatched(true)

                card1.style = "opacity: 0"
                card2.style = "opacity: 0"
                setUsedCards([card1, card2])
                dispatch(resetState());

            } else {
                setMatched(false)
                dispatch(resetState())
                changePlayerTurn(playerTurn)
                alert('No Match')
                card1.style = 'transform: 0'
                card2.style = 'transform: 0'
            }
        }

    }

    const resetGame = () => {
        dispatch(resetScore())
        setGameStarted(false)
    }

    const exitGame = () => {
        resetGame()
        dispatch(deletePlayer())
        navigate('/')
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
                    <button className='btn exit-btn' onClick={exitGame}>Exit Game</button>
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
                <div className='container__main-game--content__game' id="memory-game">
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