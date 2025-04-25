import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

function Contact() {
  return (
    <>
      <div className="pt-10 lg:pt-20">
        <ContactForm/>
        <ContactInfo/>
      </div>
    </>
  );
}

export default Contact;
