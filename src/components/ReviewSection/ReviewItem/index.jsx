import React from "react";
import styled from "styled-components";

const ReviewItem = ({ Text }) => {
  return (
    <ReviewItemStyled>
      <p>{Text}</p>
    </ReviewItemStyled>
  );
};

const ReviewItemStyled = styled.div`
  padding: 1rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-grey);
  position: relative;
  &:first-child {
    margin-right: 18px;
  }
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    width: 0.8rem;
    top: 100%;
    border-width: 0.8rem;
    border-style: solid;
    border-color: var(--background-grey) transparent transparent
      var(--background-grey);
  }
  p {
    padding: 1rem 0;
  }
`;

export default ReviewItem;
