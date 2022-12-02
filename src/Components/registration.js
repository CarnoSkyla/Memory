import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from "react-redux";
import '../Stylesheets/registration.css'
import Astro1 from '../Images/astro1.png'
import Astro2 from '../Images/astro2.png'
import { addPlayer } from '../Redux/Actions/userAction';
import { useNavigate } from 'react-router-dom'; 

const RegistrationScreen = () => {
    let navigate = useNavigate();
    const { players, success } = useSelector((state) => state.user);
    const [signedIn, setSignedIn] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if (success && signedIn) {
            if (players.length > 0) {
                alert(players[0].player1 + ' VS ' + players[0].player2)
            }
            setTimeout(() => {
                navigate('/Home')
            }, 1500); 
        }
    }, [signedIn, players, success, navigate])

    const getUserValues = () => {
        const player1 = document.getElementById('player-1').value;
        const player2 = document.getElementById('player-2').value;

        const players = validatePlayerDetails(player1, player2)

        dispatch(addPlayer(players))
        setSignedIn(true)
    }

    const validatePlayerDetails = (player1, player2) => {
        switch (true) {
            case player1.length < 3:
                alert('Please enter a player name more than 3 characters')
                setSignedIn(false);
                return;
            case player2.length < 3:
                alert('Please enter a player name more than 3 characters')
                setSignedIn(false);
                return;
            default:
                return {
                    player1: player1, 
                    player2: player2
                }
        }
    }

    return (
        <div className='container'>
            <div className='container__navigation'>
                <div className='container__navigation--empty'>

                </div>
                <div className='container__navigation--heading-wrapper'>
                    <h2>Memory</h2>
                </div>
                <div className='container__navigation--exit-btn-wrapper'>
                    <button className='btn exit-btn'>Exit Game</button>
                </div>
            </div>
            <div className='container__sub-heading-wrapper'>
                <h2>Are you ready to play?</h2>
            </div>
            <div className='container__images-input-wrapper'>
                <div className='container__images'>
                    <img src={Astro1} alt="Astronaut" id="astro-1" width={'200'} height={'200'} />
                    <img src={Astro2} alt="Astronaut" id="astro-2" width={'200'} height={'200'} />
                </div>
                <div className='container__input'>
                    <input type='text' id='player-1' placeholder="Player 1" />
                    <input type='text' id='player-2' placeholder="Player 2" />
                </div>
                <div className='container__submit'>
                    <button type='button' className="btn" onClick={getUserValues}>Lets Play</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationScreen;