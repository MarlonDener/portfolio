import React from "react";
import styled from "styled-components";

const PrimaryButton = (props) => {
  return <PrimaryButtonStyled>{props.title}</PrimaryButtonStyled>;
};

export default PrimaryButton;

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
  }
`;
