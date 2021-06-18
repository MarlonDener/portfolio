import React from "react";
import styled from "styled-components";

const ServiceCard = ({ image, title, paragrafo }) => {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="logo" />
        <h4>{title}</h4>
        <p>{paragrafo}</p>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-grey);
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0.4rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);

  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translate(-3px, -4px);
    box-shadow: none;
  }
  .container {
    padding: 1.2rem;
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.5rem 0;
    }
  }
`;

export default ServiceCard;
