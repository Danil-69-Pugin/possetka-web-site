import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {

  return (
    <div className="ba-section">

      <div className="ba-text-content">
        <h4 className="ba-title">
          <span>Сроки</span>
        </h4>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Изготовим за 5-7 дней
        </p>
        <h4 className="ba-title">
          <span>Цена</span>
        </h4>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> предоставим расчёт по самой привлекательной цене
        </p>
        <h4 className="ba-title">
          <span>Доставка</span>
        </h4>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> доставка и монтаж
          под ключ
        </p>



      </div>
    </div>
  );
}

export default BookAppointment;
