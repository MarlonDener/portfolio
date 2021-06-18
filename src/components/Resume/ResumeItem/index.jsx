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
const ResumeItemStyled = styled.div``;
export default ResumeItem;