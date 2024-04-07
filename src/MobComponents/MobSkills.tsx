import React from "react";
import {
  SkillsContainer,
  SkillsCon,
  SkillsLogoCon,
  SkillsWithLable,
  SkillsTag,
} from "./skins";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { DiFirebase } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function MobSkills() {
  return (
    <SkillsContainer>
      <SkillsCon>SKILLS</SkillsCon>
      <SkillsLogoCon>
        <SkillsWithLable>
          <FaPython size="25%" />
          <SkillsTag>Python</SkillsTag>
        </SkillsWithLable>

        <SkillsWithLable>
          <SiJavascript size="25%" />
          <SkillsTag>JavaScript</SkillsTag>
        </SkillsWithLable>
      </SkillsLogoCon>

      <SkillsLogoCon>
        <SkillsWithLable>
          <FaReact size="25%" />
          <SkillsTag>React</SkillsTag>
        </SkillsWithLable>
        <SkillsWithLable>
          <SiRedux size="25%" />
          <SkillsTag> Redux-Saga</SkillsTag>
        </SkillsWithLable>
      </SkillsLogoCon>

      <SkillsLogoCon>
        <SkillsWithLable>
          <SiTypescript size="25%" />
          <SkillsTag> TypeScript</SkillsTag>
        </SkillsWithLable>
        <SkillsWithLable>
          <FaGitAlt size="25%" />
          <SkillsTag> GIT</SkillsTag>
        </SkillsWithLable>
      </SkillsLogoCon>

      <SkillsLogoCon>
        <SkillsWithLable>
          <TbBrandMysql size="25%" />
          <SkillsTag> SQL</SkillsTag>
        </SkillsWithLable>
        <SkillsWithLable>
          <DiFirebase size="25%" />
          <SkillsTag> FireBase</SkillsTag>
        </SkillsWithLable>
      </SkillsLogoCon>

      <SkillsLogoCon>
        <SkillsWithLable>
          <FaAws size="25%" />
          <SkillsTag> AWS</SkillsTag>
        </SkillsWithLable>
        <SkillsWithLable>
          <FaCss3Alt size="25%" />
          <SkillsTag> Css</SkillsTag>
        </SkillsWithLable>
      </SkillsLogoCon>

      <SkillsLogoCon>
        <SkillsWithLable>
          <SiStyledcomponents size="25%" />
          <SkillsTag> Styled Component</SkillsTag>
        </SkillsWithLable>
        <SkillsWithLable>
          <FaGolang size="25%" />
          <SkillsTag> GoLang</SkillsTag>
        </SkillsWithLable>
      </SkillsLogoCon>
    </SkillsContainer>
  );
}
