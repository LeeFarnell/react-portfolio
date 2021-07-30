import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "../Button";

import "./index.css";

export default function AccordionExperience() {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>Experience:</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Button name="HTML" />
            <Button name="CSS" />
            <Button name="Javascript" />
            <Button name="React" />
            <Button name="jQuery" />
            <Button name="Bootstrap" />
            <Button name="MySQL" />
            <Button name="MongoDB" />
            <Button name="Git" />
            <Button name="Express" />
            <Button name="Sequelize" />
            <Button name="Moment.JS" />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
