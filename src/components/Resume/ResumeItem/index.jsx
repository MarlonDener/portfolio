import React from "react";
import styled from "styled-components";

const ResumeItem = ({ year, title, subTitle, text }) => {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
};
const ResumeItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 30%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -11px;
      top: 7px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--primary-color);
    }
    p {
      display: inline-block;
    }
  }

  .right-content {
    padding-left: 7rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 15px;
      height: 3px;
      left: 30px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.3rem;
      color: var(--white-color);
    }
    p {
      color: var(--text2);
      font-size: 0.95rem;
    }
  }
`;
export default ResumeItem;
