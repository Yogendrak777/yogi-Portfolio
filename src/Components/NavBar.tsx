import React from 'react'
import { NavBarContainer, MainCon, Con } from './skins'
 
export default function NavBar() {
  return (
    <NavBarContainer id='home'>
        <MainCon> 
            <Con href="#contact">CONTACT</Con>
            <Con href="#project">PROJECTS</Con>
            <Con href="#about">ABOUT</Con>
            <Con href="#home">HOME</Con>
        </MainCon>
    </NavBarContainer>
  )
}
