import React from 'react'
import '../Stylesheets/registration.css'
import Astro1 from '../Images/a.png'
import Astro2 from '../Images/astro2.png'

const Registration = () => {
    return (
        <div className='container'>
            <div className='container__navigation'>
                <div className='container__navigation--empty'>

                </div>
                <div className='container__navigation--heading-wrapper'>
                    <h1>Memory</h1>
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
                    <img src={Astro1} alt="Astronaut" id="astro-1" width={'200'} height={'200'}/>
                    <img src={Astro2} alt="Astronaut" id="astro-2" width={'200'} height={'200'}/>
                </div>
                <div className='container__input'>
                    <input type='text' id='player-1' placeholder="Player 1"/>
                    <input type='text' id='player-2' placeholder="Player 2"/>
                </div>
                <div className='container__submit'>
                    <button type='button' onClick={() => window.location.href = "HomeScreen"} className="btn" onCl>Let's Play</button>
                </div>
            </div>
        </div>
    )
}

export default Registration;