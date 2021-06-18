import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../../styles/Layouts";
import Title from "../../Title/Title";
import ProgressBar from "../ProgressBar";

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar Title={"HTML"} width={"100%"} Text={"Avançado"} />
          <ProgressBar Title={"CSS"} width={"100%"} Text={"Avançado"} />
          <ProgressBar
            Title={"JAVASCRIPT"}
            width={"50%"}
            Text={"Intermediário"}
          />
          <ProgressBar
            Title={"REACT.JS"}
            width={"50%"}
            Text={"Intermediário"}
          />
          <ProgressBar
            Title={"REACT.JS"}
            width={"50%"}
            Text={"Intermediário"}
          />
          <ProgressBar
            Title={"REACT.JS"}
            width={"50%"}
            Text={"Intermediário"}
          />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};
const SkillsStyled = styled.div`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`;

export default Skills;
