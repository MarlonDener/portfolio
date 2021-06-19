import React from "react";
import styled from "styled-components";

const Button = ({ filter, button }) => {
  return (
    <ButtonsStyled>
      {button.map((but, index) => {
        return (
          <ButtonStyled key={index} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--primary-color);
  padding: 0.4rem 2rem;
  color: var(--white-color);
  margin: 0 7px;
  box-shadow: 0.5rem 0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.6);
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:active,
  &:focus {
    border: 1px solid var(--white-color);
    background-color: #000;
  }
  &:hover {
    box-sizing: none;
    background-color: #131d78;
    font-weight: bold;
    border: 2px solid var(--white-color);
  }
`;

const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;

export default Button;
