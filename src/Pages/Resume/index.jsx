import React from "react";
import Skills from "../../components/Resume/Skills/index";
import ResumePart from "../../components/Resume/ResumePart/index";
import { MainLayout } from "../../styles/Layouts";

const Resume = () => {
  return (
    <div>
      <MainLayout>
        <Skills />
        <ResumePart />
      </MainLayout>
    </div>
  );
};

export default Resume;
