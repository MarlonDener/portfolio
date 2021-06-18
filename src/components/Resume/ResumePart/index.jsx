import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../../styles/Layouts";
import Title from "../../Title/Title";
import SmallTitle from "../../SmallTitle";
import ResumeItem from "../ResumeItem";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";

const business = <BusinessCenterIcon />;
const schol = <SchoolIcon />;

const ResumePart = () => {
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <SmallTitle icon={business} title={"Businnes"} />
        <div className="resume-content">
          <ResumeItem
            year={"2015 - 2018"}
            title={"Análise de Sistemas"}
            subTitle={"Universidade Nove de Julho"}
            text={
              "Lorem ipsum dolor sit amligendi temporibus a perferendis esse, modi reprehenderit numquam, necessitatibus aut hic velit, sint soluta vel! Sit nobis exercitationem ipsum."
            }
          />
        </div>

        <SmallTitle icon={schol} title={"Formação"} />
      </InnerLayout>
    </ResumeStyled>
  );
};
const ResumeStyled = styled.div``;
export default ResumePart;
