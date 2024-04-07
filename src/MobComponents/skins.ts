import styled from "styled-components";

interface JustifyContent {
  justify: string;
}

export const NavBarContainer = styled.div`
  height: auto;
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
  margin-top: 5%;
`;

export const Con = styled.a`
  color: white;
  margin-top: 50%;
  font-size: 25px;
  text-decoration: none;
`;

export const MobCon = styled.span`
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  line-height: 2;
  z-index: 2;
  background-color: transparent;
`;

export const HeaderContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
`;

export const HeaderMainCon = styled.span`
  display: flex;
  flex-direction: column;
  margin: 50% 10%;
  color: white;
  height: 3%;
  font-size: 40px;
`;

export const AboutMeCon = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  color: white;
  justify-content: center;
  margin-bottom: 15%;
`;

export const AboutMeContainer = styled.div`
  height: auto;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const AboutMeFlex = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  color: white;
  justify-content: justify;
`;

export const ProfileImageCon = styled.img`
  height: 50%;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const AboutMePara = styled.section`
  margin: 4%;
  font-size: 20px;
  width: 100%;
  line-height: 1.8;
  justify-content: justify;
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
  margin-top: 10%;
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
  width: 100%;
  height: 50%;
  border: 1px solid white;
  margin: 5% 0;
`;

export const ProjectMainCon = styled.div<JustifyContent>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  width: 100%;
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
  width: 100%;
`;

export const ContactPara = styled.section`
  margin: 2%;
  color: white;
  font-size: 16px;
  width: 100%;
  line-height: 1.8;
`;

export const NameInput = styled.input`
    margin: 1em;
    width: 90%;
    border: none;
    outline: none;
    padding : 2%;
    border-radius: 1%;
    font-size: 16px;
`;

export const TextArea = styled.textarea`
    margin: 1em;
    width: 90%;
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
  margin : 10%;
`;