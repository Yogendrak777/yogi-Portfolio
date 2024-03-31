import React from 'react'
import { NavBarContainer, MainCon, Con } from './skins'
 
export default function NavBar() {
  return (
    <NavBarContainer>
        <MainCon> 
          <Con>
            CONTACT
          </Con>
          <Con>
            PROJECTS
          </Con>
          <Con>
            ABOUT
          </Con>
          <Con>
            HOME
          </Con>
        </MainCon>
    </NavBarContainer>
  )
}
