import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              РОССЕТКА
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <ul className="ft-list-items">
            <li>
              <a href="/">ГЛАВНАЯ</a>
            </li>
            <li>
              <a href="#product">НАША ПРОДУКЦИЯ</a>
            </li>
            <li>
              <a href="#services">ДЛЯ ОПТОВИКОВ</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">НАША ПРОДУКЦИЯ</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>3D ЗАБОРЫ</Link>
            </li>
            <li>
              <Link to={"/legal"}>ВРЕМЕННЫЕ ОГРАЖДЕНИЯ</Link>
            </li>
            <li>
              <Link to={"/legal"}>ГАБИОНЫ</Link>
            </li>
            <li>
              <Link to={"/legal"}>ПРОТИВОПОДКОПНЫЕ ОГРАЖДЕНИЯ</Link>
            </li>
            <li>
              <Link to={"/legal"}>СВАРНЫЕ ОГРАЖДЕНИЯ</Link>
            </li>
            <li>
              <Link to={"/legal"}>ВОЛЬЕРЫ</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">НАШ АДРЕС</p>
          <ul className="ft-list-items">
            <li>
              <p>Г. ПЕРМЬ. УЛ. Г. ХАСАНА, 29</p>
            </li>
            <p className="ft-list-title">РЕЖИМ РАБОТЫ</p>
            <li>
              <p>ПН - ПТ 9:00 - 18:00</p>
            </li>
            <p className="ft-list-title">КОНТАКТЫ</p>
            <li>
              <a href="tel:+73422502202">+7 (342) 250 22 02</a>
            </li>
            <li>
              <a href="MAILTO:sales_op@zavodrs.ru">SALES_OP@ZAVODRS.RU</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 РОССЕТКА</p>

        <ul className="ft-social-links">
          from by Долгих Ольга
        </ul>
      </div>
    </div>
  );
}

export default Footer;
