import React, { useState } from "react";
import "./Contact.scss";
import Contactimg from "../../../../public/contactimg.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [name, email, number, text];

    const token = `7864075875:AAEqDfgVPUbuRQRSX2-VihtFRTZWKV7yb5Y`;
    const chat_id = 6306759214;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text: data,
      },
    })
      .then((data) => {
        toast("Success");
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setEmail("");
    setNumber("");
    setText("");
  };
  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__left">
          <h1 className="contact__title">Do you have any questions for us?</h1>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={handleName}
              className="contact__inp"
              placeholder="Enter your name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleEmail}
              className="contact__inp"
              placeholder="Enter your e-mail or Telegram"
            />
            <label htmlFor="phone">Phone number</label>
            <input
              type="number"
              name="phone"
              className="contact__inp"
              required
              value={number}
              onChange={handleNumber}
              placeholder="+998"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              cols="40"
              rows="5"
              value={text}
              onChange={handleText}
              placeholder="Your message"
            ></textarea>
            <button className="contact__btn btn-13">Send</button>
          </form>
        </div>
        <img src={Contactimg} alt="" className="contact__img" />
      </div>
    </div>
  );
};

export default Contact;
