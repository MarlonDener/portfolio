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
  position: relative;
  cursor: pointer;

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
