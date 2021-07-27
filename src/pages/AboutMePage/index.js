import "./index.css";

import SimpleAccordion from "../../components/Accordian";

const AboutMePage = () => {
  return (
    <div className="about-me">
      <div>
        <p>Hello, and welcome to my portfolio! </p>
        <p>
          My name is Lee Farnell and I am currently a student with the
          University of Birmingham’s Coding Boot Camp. Whilst I’m still in the
          early stages of the Boot Camp, this portfolio will be an ongoing
          evolution of my work and the things I have managed to accomplish
          during my time as a student and beyond. I’ve always had an interest in
          coding and how web pages are designed and developed to be able to do
          the things they do.
        </p>
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
