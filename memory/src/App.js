import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import './App.css';

import Registration from './Components/registration';
import HomeScreen from './Components/home';
import WinnerScreen from './Components/winner';
import store from './Redux/store';
import { setStore } from './Redux/Reducers/storeRegistry';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/Home' element={<HomeScreen />} />
          <Route path='/Winner' element={<WinnerScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );  
}

export default App;
