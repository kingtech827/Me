import React from "react";
import style from "./projects.module.css";
// import { Project } from "../project/Project";
import { Items } from "./Items";

import { certificate } from "../../../fixtures/index.";
import { SectionContainer } from "../section/SectionContainer";
export const Certificates = () => {
  return (
    <SectionContainer title="Certificates" count="04" id="certificate">
      {certificate.map((project, key) => (
        <Items
          key={key}
          title={project.title}
          description={project.description}
          img={project.img}
          tags={project.tags}
          cta={project.cta}
          url={project.url}
          left={project.left}
        />
      ))}
    </SectionContainer>
  );
};
