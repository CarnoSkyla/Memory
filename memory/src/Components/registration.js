import React from 'react'
import '../Stylesheets/registration.css'

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
                    <button className='exit-btn'>Exit Game</button>
                </div>
            </div>
        </div>
    )
}

export default Registration;