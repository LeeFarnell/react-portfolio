import "./index.css";

import ContactForm from "../../components/ContactForm";

const ContactMePage = () => {
  return (
    <div>
      <div className="contact">
        <h1>Contact Me! </h1>
      </div>

      <div className="contact-images">
        <p>Want to get in touch? Please fill in the contact form!</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMePage;
