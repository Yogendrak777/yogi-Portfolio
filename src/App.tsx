import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skils from './Components/Skils';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Skils/>
    </div>
  );
}

export default App;
