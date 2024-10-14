import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";
import Contactimg from "../../../../public/img/contactimg.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { t } = useTranslation();
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

    const token = `YOUR_TELEGRAM_BOT_TOKEN`;
    const chat_id = YOUR_CHAT_ID;
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
        toast(t("success_message"));
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
          <h1 className="contact__title">{t("contact_title")}</h1>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label htmlFor="name">{t("name_label")}</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={handleName}
              className="contact__inp"
              placeholder={t("name_placeholder")}
            />
            <label htmlFor="email">{t("email_label")}</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleEmail}
              className="contact__inp"
              placeholder={t("email_placeholder")}
            />
            <label htmlFor="phone">{t("phone_label")}</label>
            <input
              type="number"
              name="phone"
              className="contact__inp"
              required
              value={number}
              onChange={handleNumber}
              placeholder={t("phone_placeholder")}
            />
            <label htmlFor="message">{t("message_label")}</label>
            <textarea
              name="message"
              cols="40"
              rows="5"
              value={text}
              onChange={handleText}
              placeholder={t("message_placeholder")}
            ></textarea>
            <button className="contact__btn btn-13">{t("send_button")}</button>
          </form>
        </div>
        <img src={Contactimg} alt="" className="contact__img" />
      </div>
    </div>
  );
};

export default Contact;
