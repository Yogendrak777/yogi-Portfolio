import React from 'react'
import NavBar from './NavBar';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skils';
import Project from './Project';
import ContactMe from './ContactMe';
import Footer from './Footer';
export default function Routers() {
  return (
    <div>
       <NavBar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}
