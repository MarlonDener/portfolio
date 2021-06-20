import React from "react";
import styled from "styled-components";

const PrimaryButton = (props) => {
  return <PrimaryButtonStyled>{props.title}</PrimaryButtonStyled>;
};

export default PrimaryButton;

const PrimaryButtonStyled = styled.a`
  background: linear-gradient(
    180deg,
    rgb(80, 16, 184) 52%,
    #4819c9 76%,
    #0225ec 180%
  );
  padding: 0.8rem 4rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  text-align: center;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 800px) {
    margin: 0 auto;
    display: flex;
    text-align: center;
    font-size: 20px;
    padding: 0.5rem 3rem;
    width: 80%;
  }
  @media (max-width: 400px) {
    font-size: 20px;
    width: 80%;
    padding: 0.5rem 2rem;
  }

  transition: all 0.3s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
  }
  &:hover::after {
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
  }
  &:hover {
  }
`;
