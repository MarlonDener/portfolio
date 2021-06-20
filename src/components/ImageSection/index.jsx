import React from "react";
import styled from "styled-components";
import resume from "../../img/Marlon.jpg";
import PrimaryButton from "../PrimaryButton";
const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="Resume" />
      </div>

      <div className="right-content">
        <div className="sub-title">
          <h4>
            E sou <span>Front-end Developer</span>
          </h4>
        </div>
        <p className="paragraphy">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          cumque veritatis quas praesentium adipisci iusto alias accusantium,
          optio iste quod iure amet. Ex optio cumque, veritatis repellat placeat
          doloribus? Aut.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nome:</p>
            <p>Idade:</p>
            <p>Nacionalidade:</p>
            <p>Linguagens:</p>
            <p>Localização:</p>
            <p>Serviços:</p>
          </div>
          <div className="info">
            <p>Marlon Dener Lima Magalhães</p>
            <p>20</p>
            <p>Brasileiro</p>
            <p>Inglês Tecnico</p>
            <p>Embu-Guaçu - SP</p>
            <p>Serviços</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
};
export default ImageSection;

const ImageSectionStyled = styled.div`
  margin-top: 4rem;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  .right-content {
    .about-info {
      display: flex;
    }
    h4 {
      font-size: 2rem;
      color: var(--white-color);

      span {
        font-size: 1.8rem;
        color: var(--primary-color);
      }
    }
    .paragraphy {
      padding: 1rem 0;
      color: var(--text);
      font-weight: 300;
      font-size: 0.96rem;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.5rem;
      align-items: center;
      .info-title {
        padding-right: 3rem;
        font-weight: 700;
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          font-size: 0.9rem;
          color: var(--text-strong);
        }
        .info {
          font-weight: 300;
        }
      }
    }
  }
  .left-content {
    width: 100%;
    @media (max-width: 1000px) {
      display: none;
      visibility: hidden;
    }
    img {
      height: 90%;
      z-index: 10;
      position: relative;
      width: 83%;
      border-top-right-radius: 30px;
    }
  }
`;
