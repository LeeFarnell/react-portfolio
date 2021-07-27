import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./index.css";

export default function SimpleAccordion() {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>Experience With:</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>MySQL</li>
              <li>Git</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>moment.js</li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
