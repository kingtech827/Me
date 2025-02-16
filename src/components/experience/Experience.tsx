import React from "react";
import { Row, Col } from "react-bootstrap";
import { SectionContainer } from "../section/SectionContainer";

import { Accordion } from "../accordion/Accordion";
import { AccordionItem } from "../accordion/AccordionItem";
import { AccordionBody } from "../accordion/AccordionBody";
import { ExperienceItem } from "./ExperienceItem";
import { Work } from "./types";
import { works } from "../../../fixtures/index.";
export const Experience = () => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <SectionContainer
      title="My Previous Experience"
      count="03"
      id="experience"
      contentClasses="pb-0 pb-lg-5"
    >
      <Row>
        <Col lg={6} md={12} className="d-flex align-items-center">
          <div>
            <h3 className="text-highlight fw-bold">
              Previous Experience
            </h3>
            <p className="text-muted-le">
            Throughout my career, I 've contributed to lots of complex enterprise systems, e-commerce platforms, and interactive data visualization tools. 
            <br/><br/><br/>
            My background in full-stack development allows me to handle challenges from ideation to production, ensuring both user experience and technical requirements are met with precision.
            </p>
          </div>
        </Col>
        <Col lg={6} md={12} className="pt-4 pt-lg-0">
          <Accordion>
            {works.map((work: Work, key) => (
              <AccordionItem
                key={key}
                active={active === key}
                title={work.company + " - " + work.title}
                onClick={() => setActive(key === active ? -1 : key)}
              >
                <AccordionBody>
                  <ExperienceItem work={work} />
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </SectionContainer>
  );
};
