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
  margin: 0 1rem;
  .container {
    padding: 1.2rem;
  }
`;

export default ServiceCard;
