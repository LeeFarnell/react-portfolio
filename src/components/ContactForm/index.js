import "./index.css";

import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <input className="contact-field" placeholder="Name"></input>

        <input className="contact-field" placeholder="Email"></input>

        <textarea className="contact-field" placeholder="Message"></textarea>
      </form>
      <Button name="SUBMIT" />
    </div>
  );
};

export default ContactForm;
