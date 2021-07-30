import "./index.css";

import { useForm, ValidationError } from "@formspree/react";

import Button from "../Button";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgryqpg");
  if (state.succeeded) {
    return <p className="contact-form">Thanks for your message!</p>;
  }
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            id="email"
            type="email"
            name="email"
            className="contact-field"
            placeholder="name@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            className="contact-field"
            placeholder="Write your message here"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button type="submit" disabled={state.submitting} name="Submit" />
      </form>
    </div>
  );
};
export default ContactForm;
