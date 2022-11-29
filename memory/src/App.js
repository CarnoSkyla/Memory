import React from 'react';

import './App.css';

import Registration from './Components/registration';
import HomeScreen from './Components/home';
import WinnerScreen from './Components/winner';

function App() {
  if (window.document.location.href === 'http://localhost:3000/HomeScreen') {
    return (
      <HomeScreen/>
    )
  } else if(window.document.location.href === 'http://localhost:3000/WinnerScreen') {
    return (
      <WinnerScreen />
    )
  } else {
    return (
      <Registration/>
    );
  }
  
}

export default App;
