import styled, { keyframes } from "styled-components";

interface JustifyContent {
  justify: string;
}
interface ProfileImageProps {
  AnimationName: boolean;
}

const PhotoAnimation = keyframes`
 from { translate: -140px; }
 to  { translate: 0px; }
`

const AboutMeParaAnimation = keyframes`
 from { translate: 140px; }
 to  { translate: 0px; }
`

export const NavBarContainer = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`;

export const MainCon = styled.span`
  display: flex;
  height: 3%;
  flex-direction: row-reverse;
  margin-right: 10%;
`;

export const Con = styled.a`
  color: white;
  height: 3%;
  margin: 2%;
  font-size: 21px;
  text-decoration: none;
`;

export const HeaderContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
`;

export const HeaderMainCon = styled.span`
  display: flex;
  flex-direction: column;
  margin: 18% 10%;
  color: white;
  height: 3%;
  font-size: 50px;
`;

export const AboutMeCon = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  color: white;
  justify-content: center;
  margin-bottom: 2%;
`;

export const AboutMeContainer = styled.div`
  height: 80%;
  font-weight: 600;
`;

export const AboutMeFlex = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  color: white;
  justify-content: center;
`;

export const ProfileImageCon = styled.img<ProfileImageProps>`
  height: 30%;
  width: 30%;
  margin: 2%;
  animation-name: ${(props) => (props.AnimationName && PhotoAnimation)};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`;

export const AboutMePara = styled.section`
  margin: 2%;
  font-size: 20px;
  width: 40%;
  line-height: 1.8;
  animation-name: ${AboutMeParaAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`;

export const AboutMeLogoCon = styled.section`
  display: flex;
  flex-direction: row;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  justify-content: center;
`;

export const AboutMeLogos = styled.img`
  height: 10%;
  width: 10%;
  background-color: white;
  border-radius: 15%;
  margin: 5%;
`;

export const SkillsContainer = styled.div`
  height: auto;
  width: 80%;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

export const SkillsCon = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 35px;
  align-items: center;
  color: white;
  justify-content: center;
  margin: 7%;
`;

export const SkillsLogoCon = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 5%;
`;

export const SkillsWithLable = styled.section`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  color: white;
  justify-content: center;
`;

export const SkillsTag = styled.section`
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-top: 1%;
`;

export const ProjectContainer = styled.div`
  height: auto;
  width: 80%;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

export const ProjectCon = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 35px;
  align-items: center;
  color: white;
  justify-content: center;
  margin: 7%;
`;

export const ProjectCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  width: 45%;
  height: 50%;
  border: 1px solid white;
  margin: 1%;
`;

export const ProjectMainCon = styled.div<JustifyContent>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  width: 100%;
  animation-name: ${(props) => (props.justify === 'flex-start' ? PhotoAnimation : AboutMeParaAnimation)};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`;

export const ProjectTitle = styled.span`
  font-family: "Quicksand", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin: 2%;
`;

export const ProjectDesc = styled.section`
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 2%;
  justify-content: justify;
`;

export const ProjectMadeWith = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  margin: 1%;
`;

export const ContactContainer = styled.div`
  height: auto;
  width: 80%;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

export const ContactCon = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 35px;
  align-items: center;
  color: white;
  justify-content: center;
  margin: 7%;
`;

export const ContactConRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContactForm = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const ContactPara = styled.section`
  margin: 2%;
  color: white;
  font-size: 16px;
  width: 40%;
  line-height: 1.8;
`;

export const NameInput = styled.input`
    margin: 1em;
    width: 70%;
    border: none;
    outline: none;
    padding : 2%;
    border-radius: 1%;
    font-size: 16px;
`;

export const TextArea = styled.textarea`
    margin: 1em;
    width: 70%;
    rows=4;
    cols=50;
    border: none;
    outline: none;
    padding : 2%;
    border-radius: 1%;
    font-size: 16px;
`;

export const SubmitButton = styled.button`
    color: black
    background-color : white;
    font-size: 16px;
    padding : 2%;
    border-radius: 7%;
`;

export const FooterContainer = styled.div`
  width: 100%;
  color: white;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin : 5%;
`;