import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'

import '../Stylesheets/home.css'

const HomeScreen = () => {

    const users = useSelector((state) => state.user)

    useEffect(() => {
        console.log(users);
    }, [])
    return (
        <div>
            <h2>Home Screen</h2>
        </div>
    )
}

export default HomeScreen