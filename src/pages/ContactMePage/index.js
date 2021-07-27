import "./index.css";

import ContactForm from "../../components/ContactForm";

const ContactMePage = () => {
  return (
    <div>
      <div className="contact">
        <h1>Contact Me! </h1>
      </div>

      <div className="contact-images">
        <p>Want to get in touch? Use one of the links below!</p>
        <a href="mailto:leefarnell@mac.com">
          <img
            title="Email Me!"
            src="./assets/images/EmailLogo.png"
            alt="Email Logo"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/LeeFarnell"
          target="_blank"
          rel="noreferrer"
        >
          <img
            title="Contact me on LinkedIn!"
            src="./assets/images/LinkedInLogo.png"
            alt="LinkedIn Logo"
          />
        </a>

        <a
          href="https://github.com/LeeFarnell"
          target="_blank"
          rel="noreferrer"
        >
          <img
            title="Check out my GitHub!"
            src="assets/images/GitHubLogo.png"
            alt="GitHub Logo"
          />
        </a>

        <a
          href="https://twitter.com/LeeFarnell"
          target="_blank"
          rel="noreferrer"
        >
          <img
            title="Follow me on Twitter!"
            src="assets/images/TwitterLogo.png"
            alt="Twitter Logo"
          />
        </a>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactMePage;
