import Title from "../Title/Title";
import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import ServiceCard from "../ServiceCard/index";
import Design from "../../img/design.svg";
import Mind from "../../img/mind.svg";
import Gamedev from "../../img/game-dev.svg";

const ServiceSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"}></Title>
        <div className="services">
          <ServiceCard
            image={Design}
            title={"Web Design"}
            paragrafo={
              "Lorem ipsum is very stronger, because help us a make text generation"
            }
          />
          <ServiceCard
            image={Mind}
            title={"Web Design"}
            paragrafo={
              "Lorem ipsum is very stronger, because help us a make text generation"
            }
          />
          <ServiceCard
            image={Gamedev}
            title={"Web Design"}
            paragrafo={
              "Lorem ipsum is very stronger, because help us a make text generation"
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

export default ServiceSection;

const ServicesSectionStyled = styled.section`
  .services {
    display: flex;
    justify-content: space-between;
  }
`;
