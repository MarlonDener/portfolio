import React from "react";
import styled from "styled-components";

const Title = ({ title, span }) => {
  return (
    <div>
      <TitleStyled>
        <h2>
          {title}
          <span>{span}</span>
        </h2>
      </TitleStyled>
    </div>
  );
};
export default Title;

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3.8rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.2rem;
    span {
      font-weight: 600;
      color: rgba(25, 29, 43, 0.44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 20%;
      z-index: -1;
    }
  }
  h2::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 8rem;
    height: 0.31rem;
    background-color: var(--background-light-color-2);
    border-radius: 15px;
  }
  h2::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 3.4rem;
    height: 0.31rem;
    background-color: var(--primary-color);
    border-radius: 15px;
  }
`;
