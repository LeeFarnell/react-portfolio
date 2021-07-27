import "./index.css";

import SimpleAccordion from "../../components/Accordian";

const AboutMePage = () => {
  return (
    <div className="about-me">
      <div>
        <h1>Hello! 👋</h1>
        <p>
          Welcome to my Portfolio! My name is Lee Farnell and I am currently a
          student with the University of Birmingham’s Coding Boot Camp.
        </p>
        <p>
          As the course draws to a close, I am looking to become a fullstack
          developer.
        </p>
        <p>
          Please have a look around and check out some of the projects I have
          worked on and the experience I have gained.
        </p>
        <br />
        <SimpleAccordion />
      </div>
      <img
        src="https://leefarnell.github.io/MyPortfolio/assets/images/Me.png"
        alt="Lee Farnell"
        className="about-me-image"
      />
    </div>
  );
};

export default AboutMePage;
