import React from "react";
import {
  AboutMeCon,
  AboutMeContainer,
  ProfileImageCon,
  AboutMeFlex,
  AboutMePara,
  AboutMeLogoCon,
  AboutMeLogos,
} from "./skins";
import ProfileImage from "./assets/yogiImage.jpeg";
import InkedLogo from "./assets/linkedin.png";
import GitHub from "./assets/github.png";
import Mail from "./assets/mail.png";

export default function AboutMe() {

  const handleGitHub = () => {
    window.open('https://github.com/Yogendrak777', '_blank', 'noopener')
  }
  const handleLinkedIn = () => {
    window.open(' https://linkedin.com/in/yogendra-k/', '_blank', 'noopener')
  }
  const handleMail = () => {
    window.open('mailto:yogendrakise2023@gmail.com', '_blank', 'noopener')
  }
  return (
    <AboutMeContainer>
      <AboutMeCon>ABOUT ME</AboutMeCon>
      <AboutMeFlex>
        <ProfileImageCon src={ProfileImage} alt="Profile pic" />
        <AboutMePara>
          Hello World! I'm Yogendra k, a Front-End Web Developer based out of
          Bangalore. With a strong foundation in modern web technologies, I love
          combining the worlds of logic and creative design to make
          eye-catching, accessible, and user-friendly websites and applications.
          <br />
          <br />
          Technology leads, society follows. The move towards increasing
          inclusivity and diversity in the industry through representation is of
          importance to me.
          <br />
          <br />
          Proficient in debugging, helping elevate user experience, and
          streamline internal processes. Achieved 40% efficiency increase on
          project delivery times
          <br />
          <br />
          <AboutMeLogoCon>
            <AboutMeLogos src={GitHub} alt="GitHub pic"  onClick={handleGitHub}/>
            <AboutMeLogos src={InkedLogo} alt="Linked In pic"  onClick={handleLinkedIn} />
            <AboutMeLogos src={Mail} alt="Mail pic"  onClick={handleMail} />
          </AboutMeLogoCon>
        </AboutMePara>
      </AboutMeFlex>
    </AboutMeContainer>
  );
}
