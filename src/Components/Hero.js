import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("#product");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">ПРОИЗВОДСТВО 3D-ЗАБОРОВ</p>
          <h2 className="text-title"><center>ИЗ СВАРНОЙ СЕТКИ</center></h2>
          <p className="text-descritpion">РОССЕТКА – ПРОДАЕМ ТО, ЧТО ПРОИЗВОДИМ</p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            РАСЧИТАТЬ ПРОЕКТ
          </button>

          <a href="#product"
              className="navbar-btn"
              type="button">КАТАЛОГ ПРОДУКЦИИ</a>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>1,5К+</p>
              <p>СЧАСТЛИВЫХ КЛИЕНТОВ</p>
            </div>

            <div className="text-stats-container">
              <p>250+</p>
              <p>ЗАВЕРЩЕННЫХ ПРОЕКТОВ</p>
            </div>

            <div className="text-stats-container">
              <p>15+</p>
              <p>ЛЕТ СТАЖА</p>
            </div>
          </div>
        </div>

      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
