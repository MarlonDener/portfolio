import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../styles/Layouts";
import Title from "../../components/Title/Title";
import ImageSection from "../../components/ImageSection";
import ServiceSection from "../../components/ServiceSection";
import ReviewSection from "../../components/ReviewSection";

const About = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"Sobre mim"} span={"Sobre mim"} />
        <ImageSection />
        <ServiceSection />
        <ReviewSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default About;

const AboutStyled = styled.section``;
