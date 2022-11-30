import React from 'react';

import { Provider } from 'react-redux'

import './App.css';

import Registration from './Components/registration';
import HomeScreen from './Components/home';
import WinnerScreen from './Components/winner';
import configureStore from './Redux/store';
import { setStore } from './Redux/Reducers/storeRegistry';

const store = configureStore();

setStore(store);

function App() {
  return (
    <Provider store={store}>
      {
        window.document.location.href === 'http://localhost:3000/HomeScreen' && 
        <HomeScreen />
      }
      {
        window.document.location.href === 'http://localhost:3000/WinnerScreen' && 
        <WinnerScreen />
      }
      {
        window.document.location.href === 'http://localhost:3000/' && 
        <Registration />
      }
    </Provider>
  );  
}

export default App;
