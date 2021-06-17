import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../styles/Layouts";
import Title from "../../components/Title/Title";
import ImageSection from "../../components/ImageSection";
import ServiceSection from "../../components/ServiceSection";

const About = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"Sobre mim"} span={"Sobre mim"} />
        <ImageSection />
        <ServiceSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default About;

const AboutStyled = styled.section``;
