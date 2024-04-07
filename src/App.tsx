import React from 'react';
import './App.css';
import { isMobile } from 'react-device-detect';

import MobNavBar from './MobComponents/MobNavBar';
import MobHeader from './MobComponents/MobHeader';
import MobAboutMe from './MobComponents/MobAboutMe';
import MobSkills from './MobComponents/MobSkills';
import MobProjects from './MobComponents/MobProjects';
import MobContactMe from './MobComponents/MobContactMe';
import MobFooter from './MobComponents/MobFooter';

import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skils';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';


function App() {

  return (
    <>
    {isMobile ? 
    <div className='App'>
         <MobNavBar/>
         <MobHeader/> 
         <MobAboutMe/> 
         <MobSkills/>
         <MobProjects/>
         <MobContactMe/>
         <MobFooter/>
    </div>
     : 
    <div className='App'>
       <NavBar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
    }
    </>
  );
}

export default App;
