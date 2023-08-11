import React, { useRef } from "react";
import "./Support.css";
import { toast } from "react-toastify";

const Support = () => {
  const openWhatsAppChat = (phone, message) => {
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phone
    )}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactNoRef = useRef(null);
  const messageRef = useRef(null);
  const formattributes = [
    {
      type: "text",
      color: "primary",
      label: "Name",
      placeholder: "Enter your name",
      defaultValue: "",
      className: "max-w-1/2",
      ref: nameRef,
    },
    {
      type: "email",
      color: "secondary",
      label: "Email",
      placeholder: "Enter your email",
      defaultValue: "",
      className: "max-w-1/2",
      ref: emailRef,
    },
    {
      type: "tel",
      color: "success",
      label: "Contact No",
      placeholder: "Enter your contact no",
      defaultValue: "",
      className: "max-w-1/2",
      ref: contactNoRef,
    },
    {
      type: "text",
      color: "warning",
      label: "Message",
      placeholder: "Enter your message",
      defaultValue: "",
      className: "max-w-1/2",
      ref: messageRef,
    },
  ];
  const handlesubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const contactNo = contactNoRef.current.value;
    const message = messageRef.current.value;
    if (!name || !email || !contactNo || !message) {
      return toast.error("Please fill all the fields");
    }

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nContact No: ${contactNo}\nMessage: ${message}`;
    const phoneNumber = "+917082309833";
    openWhatsAppChat(phoneNumber, whatsappMessage);
    handleclear();
  };

  const handleclear = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    contactNoRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <section id="contact" className="app__contact">
      <div className="app__contact-header">
        <h1>
          Contact <span className="highlight">Me</span>
        </h1>
      </div>
      <div className="app__contact-container">
        <div className="app-form">
          {formattributes.map((formdata, index) => (
            <input
              type={formdata.type}
              key={index}
              defaultValue={formdata.defaultValue}
              className="input-field"
              placeholder={formdata.placeholder}
              ref={formdata.ref}
              required
            />
          ))}

          <div className="app-form-group buttons">
            <button className="success-button" onClick={handlesubmit}>
              Whatsapp Me
            </button>
            <button className="danger-button clear" onClick={handleclear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
