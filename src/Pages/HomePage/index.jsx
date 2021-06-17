import React from "react";
import Particle from "../../components/Particles/Particles";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Olá eu sou <span>Marlon Dener</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quasi
          veritatis necessitatibus voluptate id sapiente porro dolore voluptatem
          molestias neque adipisci odio
        </p>
        <div className="icons">
          <a href="#" className="icon i-facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="#" className="icon i-youtube">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-particles-js {
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    h1 {
      font-size: 3rem;
      color: var(--white-color);
      span {
        color: var(--primary-color);
        font-size: 2.3rem;
        filter: brightness(1.2);
      }
    }

    P {
      font-size: 1rem;
      margin: 15px 0px;
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        border: 2px solid var(--border-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 5px 6px;
        }
      }
    }
  }
`;

export default HomePage;
