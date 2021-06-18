import React from "react";
import styled from "styled-components";

const ProgressBar = ({ Title, Text, width }) => {
  return (
    <ProgressBarStyled>
      <h6>{Title}</h6>
      <div className="progress-bar">
        <p>{Text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyled>
  );
};
const ProgressBarStyled = styled.div`
  h6 {
    color: var(--white-color);
    font-size: 1rem;
    padding-bottom: 0.3rem;
  }
  .progress-bar {
    display: flex;
    align-items: center;

    p {
      color: var(--text2);
      font-size: 0.9rem;
      width: 25%;
    }
    .progress {
      margin: 0 5px;
      position: relative;
      width: 75%;
      height: 0.35rem;
      border-radius: 10px;
      background-color: var(--border-color);
      span {
        background-color: var(--primary-color);
        position: absolute;
        left: 0;
        height: 100%;
      }
    }
  }
`;

export default ProgressBar;
