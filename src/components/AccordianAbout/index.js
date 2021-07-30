import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./index.css";

export default function AccordionAbout() {
  return (
    <div className="accordion-abt">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>More About Me:</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            I am a 31 year old gay vegan, living in Birmingham with my partner
            and our one eyed cat.
            <p />
            When I am not working, I am usually playing video games. I am a huge
            fan of Nintendo and a lot of the games that they create including
            Pokemon, Legend of Zelda, Mario Bros, Animal Crossing, just to name
            a few.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
