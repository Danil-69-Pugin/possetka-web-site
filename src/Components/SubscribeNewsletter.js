import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      emailRegex.test(inputEmail)
        ? toast.success("Спасибо за подписку", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => {
              setIsButtonDisabled(true);
              setInputEmail("");
            },
            onClose: () => setIsButtonDisabled(false),
          })
        : toast.error("Введите корректный адресс", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsButtonDisabled(true),
            onClose: () => setIsButtonDisabled(false),
          });
    }
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Подписаться на обновления</p>
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Введите пожалуйста адресс почты"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <button
        className="text-appointment-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleBookAppointmentClick}
      >
        Подписатся
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
