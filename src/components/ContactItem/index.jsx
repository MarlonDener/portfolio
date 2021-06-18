import React from "react";
import styled from "styled-components";

const ContactItem = ({ icon, title, contact1, contact2 }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  );
};

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--medium-grey);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border-left: 4px solid var(--primary-color);
  border-top: 8px solid var(--primary-color);
  transition: all 0.3s ease-in-out;
  box-shadow: 0.5rem 0.4rem 2rem 0.5rem rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: var(--medium-grey);
  }
  .left-content {
    padding: 1rem 1.2rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    margin-right: 0.9rem;
    svg {
      font-size: 2rem;
    }
  }
  .right-content {
    h6 {
      font-size: 1rem;
      color: var(--white-color);
      margin-bottom: 0.5rem;
      width: 20px;
      font-weight: bold;
      border-bottom: 4px solid var(--primary-color);
      text-transform: uppercase;
      display: inline-block;
      transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
      &:hover {
        width: 100px;
      }
    }
    p {
      color: var(--text-strong);
      padding: 0.2rem 0;
      font-size: 0.9rem;
    }
  }
`;

export default ContactItem;
