import React from "react";
import {
  ProjectContainer,
  ProjectCon,
  ProjectCardDiv,
  ProjectTitle,
  ProjectMainCon,
  ProjectDesc,
  ProjectMadeWith,
} from "./skins";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

export default function Project() {
  const handleGitHub = (props: any) => {
    window.open(props, "_blank", "noopener");
  };

  return (
    <ProjectContainer>
      <ProjectCon id="project" >PROJECTS</ProjectCon>
      <ProjectMainCon justify="flex-start">
        <ProjectCardDiv>
          <ProjectTitle>Legacy properties</ProjectTitle>
          <ProjectDesc>
            Led the modernization of legacy properties using React.js,
            Redux-Saga, TypeScript, and Firebase, employing Styled Components
            for a seamless and scalable front-end architecture.
          </ProjectDesc>
          <ProjectDesc>MADE WITH </ProjectDesc>
          <ProjectMadeWith>
            <FaReact size="7%" />
            &nbsp; &nbsp;
            <SiRedux size="7%" />
            &nbsp; &nbsp;
            <SiTypescript size="7%" />
            &nbsp; &nbsp;
            <DiFirebase size="7%" />
            &nbsp; &nbsp;
            <SiStyledcomponents size="7%" />
          </ProjectMadeWith>
          <ProjectDesc
            onClick={() =>
              handleGitHub("https://github.com/Yogendrak777/TajRealestate")
            }
          >
            {" "}
            GitHub <FaExternalLinkAlt size="2.5%" />{" "}
          </ProjectDesc>
        </ProjectCardDiv>
      </ProjectMainCon>
      <ProjectMainCon justify="flex-end">
        <ProjectCardDiv>
          <ProjectTitle>Get-Spare</ProjectTitle>
          <ProjectDesc>
            Developed a web application that simplifies finding and purchasing
            vehicle spare parts. Users can search for parts, compare prices from
            various vendors,This emphasizes your ability to solve a real-world
            problem (finding car parts) and showcases your technical skills in
            building a user-friendly web application with e- commerce
            functionality.
          </ProjectDesc>
          <ProjectDesc>MADE WITH </ProjectDesc>
          <ProjectMadeWith>
            <FaReact size="7%" />
            &nbsp; &nbsp;
            <SiRedux size="7%" />
            &nbsp; &nbsp;
            <SiJavascript size="7%" />
            &nbsp; &nbsp;
            <DiFirebase size="7%" />
          </ProjectMadeWith>
          <ProjectDesc
            onClick={() =>
              handleGitHub(
                "https://github.com/Yogendrak777/Java_Projects/tree/master/DBMSMiniProject"
              )
            }
          >
            {" "}
            GitHub <FaExternalLinkAlt size="2.5%" />{" "}
          </ProjectDesc>
        </ProjectCardDiv>
      </ProjectMainCon>
      <ProjectMainCon justify="flex-start">
        <ProjectCardDiv>
          <ProjectTitle>Dental V5</ProjectTitle>
          <ProjectDesc>
            Leveraging the YOLOv5 model, I built a medical image classification
            application. It analyzes raw images to identify and classify defects
            like rotation, crawling, and spacing, along with their severity.
            This real-time feedback empowers doctors to make quicker and more
            effective treatment decisions.
          </ProjectDesc>
          <ProjectDesc>MADE WITH </ProjectDesc>
          <ProjectMadeWith>
            <FaPython size="7%" />
            &nbsp; &nbsp;
            <FaReact size="7%" />
            &nbsp; &nbsp;
            <SiRedux size="7%" />
            &nbsp; &nbsp;
            <SiTypescript size="7%" />
            &nbsp; &nbsp;
            <DiFirebase size="7%" />
          </ProjectMadeWith>
          <ProjectDesc
            onClick={() =>
              handleGitHub("https://github.com/Yogendrak777/DentalModel")
            }
          >
            {" "}
            GitHub <FaExternalLinkAlt size="2.5%" />{" "}
          </ProjectDesc>
        </ProjectCardDiv>
      </ProjectMainCon>
      <ProjectMainCon justify="flex-end">
        <ProjectCardDiv>
          <ProjectTitle>Dashboard V3</ProjectTitle>
          <ProjectDesc>
            This project involved creating the v3 Dashboard, a digital twin
            platform that revolutionizes car maintenance. Users can monitor
            their vehicle's health in real-time, gaining valuable insights into
            performance and potential issues. This empowers them to make
            informed decisions about maintenance, optimizing car life and
            safety.
          </ProjectDesc>
          <ProjectDesc>MADE WITH </ProjectDesc>
          <ProjectMadeWith>
            <FaReact size="7%" />
            &nbsp; &nbsp;
            <SiRedux size="7%" />
            &nbsp; &nbsp;
            <SiJavascript size="7%" />
            &nbsp; &nbsp;
            <DiFirebase size="7%" />
          </ProjectMadeWith>
          <ProjectDesc
            onClick={() =>
              handleGitHub(
                "https://github.com/Yogendrak777/Java_Projects/tree/master/DBMSMiniProject"
              )
            }
          >
            {" "}
            GitHub <FaExternalLinkAlt size="2.5%" />{" "}
          </ProjectDesc>
        </ProjectCardDiv>
      </ProjectMainCon>
    </ProjectContainer>
  );
}
