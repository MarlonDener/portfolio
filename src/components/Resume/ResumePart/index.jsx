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
        <div className="small-title">
          <SmallTitle icon={business} title={"Formação acadêmica"} />
        </div>

        <div className="resume-content">
          <ResumeItem
            year={"2015 - 2018"}
            title={"Análise de Sistemas"}
            subTitle={"Universidade Nove de Julho"}
            text={
              "Lorem ipsum dolor sit amligendi temporibus a perferendis esse, modi reprehenderit numquam,prehenderit numqprehenderit numqprehenderit numq necessitatibus aut hic velit, sint soluta vel! Sit nobis exercitationem ipsum."
            }
          />
          <ResumeItem
            year={"2015 - 2018"}
            title={"Análise de Sistemas"}
            subTitle={"Universidade Nove de Julho"}
            text={
              "Lorem ipsum dolor sit amligendi temporibus a perferendis esse, modi reprehenderit numquam,prehenderit numqprehenderit numqprehenderit numq necessitatibus aut hic velit, sint soluta vel! Sit nobis exercitationem ipsum."
            }
          />
          <ResumeItem
            year={"2015 - 2018"}
            title={"Análise de Sistemas"}
            subTitle={"Universidade Nove de Julho"}
            text={
              "Lorem ipsum dolor sit amligendi temporibus a perferendis esse, modi reprehenderit numquam,prehenderit numqprehenderit numqprehenderit numq necessitatibus aut hic velit, sint soluta vel! Sit nobis exercitationem ipsum."
            }
          />
        </div>

        <SmallTitle icon={schol} title={"Experiência em tecnologia"} />
        <ResumeItem
          year={"2015 - 2018"}
          title={"Análise de Sistemas"}
          subTitle={"Universidade Nove de Julho"}
          text={
            "Lorem ipsum dolor sit amligendi temporibus a perferendis esse, modi reprehenderit numquam,prehenderit numqprehenderit numqprehenderit numq necessitatibus aut hic velit, sint soluta vel! Sit nobis exercitationem ipsum."
          }
        />
        <ResumeItem
          year={"2015 - 2018"}
          title={"Análise de Sistemas"}
          subTitle={"Universidade Nove de Julho"}
          text={
            "Lorem ipsum dolor sit amligendi temporibus a perferendis esse, modi reprehenderit numquam,prehenderit numqprehenderit numqprehenderit numq necessitatibus aut hic velit, sint soluta vel! Sit nobis exercitationem ipsum."
          }
        />
      </InnerLayout>
    </ResumeStyled>
  );
};
const ResumeStyled = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default ResumePart;
