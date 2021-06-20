import React from "react";
import styled from "styled-components";

const SmallTitle = ({ icon, title }) => {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
};

const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 4rem;
    margin-bottom: 3rem;
  }
  p {
    padding-right: 1.2rem;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2rem;
    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

export default SmallTitle;
