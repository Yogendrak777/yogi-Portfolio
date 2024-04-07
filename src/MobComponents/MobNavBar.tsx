import React, { useState } from "react";
import { NavBarContainer, MainCon, Con, MobCon } from "./skins";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function MobNavBar() {
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const HandleTogel = () => {
    setShowHeader(!showHeader);
  };

  return (
    <NavBarContainer id="home">
      <MainCon>
        {showHeader ?<IoMdClose size="10%" color="white" onClick={HandleTogel} /> : <GiHamburgerMenu size="10%" color="white" onClick={HandleTogel} /> }
        {showHeader && (
          <MobCon onClick={HandleTogel}>
            <Con href="#contact">CONTACT</Con>
            <Con href="#project">PROJECTS</Con>
            <Con href="#about">ABOUT</Con>
            <Con href="#home">HOME</Con>
          </MobCon>
        )}
      </MainCon>
    </NavBarContainer>
  );
}
