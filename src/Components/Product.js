import React from "react";
import ProdustsCard from "./ProdustsCard";
import gabions from "../Assets/gabions.jpg";
import setkarabitsa from "../Assets/setkarabitza.jpg";
import vorota from "../Assets/vorota.jpg";
import dsetka from "../Assets/3dsetka.jpg";
import timezabor from "../Assets/timezabor.jpg";
import nonpodcop from "../Assets/nonpodkop.jpg";
import svarnizabors from "../Assets/svarniizabors.jpg";
import uogoza from "../Assets/uogoza.jpg";
import volers from "../Assets/volers.jpg";
import "../Styles/Product.css";

function Product() {
  return (
    <div className="doctor-section" id="product">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Производим в Перми – продаем по всей России</span>
        </h3>

      </div>

      <div className="dt-cards-content">
        <ProdustsCard
          img={dsetka}
          name="3D ЗАБОРЫ"
        />
        <ProdustsCard
          img={timezabor}
          name="ВРЕМЕННЫЕ ОГРАЖДЕНИЯ"
        />
        <ProdustsCard
          img={gabions}
          name="ГАБИОНЫ"
        />
        <ProdustsCard
          img={setkarabitsa}
          name="СЕТКА РАБИЦА"
        />

        <ProdustsCard
              img={vorota}
              name="ВОРОТА И КАЛИТКИ"
          />
          <ProdustsCard
              img={nonpodcop}
              name="ПРОТИВОПОДКОПНЫЕ ОГРАЖДЕНИЯ"
          />
          <ProdustsCard
              img={svarnizabors}
              name="СВАРНЫЕ ОГРАЖДЕНИЯ"
          />
          <ProdustsCard
              img={uogoza}
              name='КОЛЮЧАЯ ПРОВОЛОКА ТИПА "ЕГОЗА"'
          />
        <ProdustsCard
            img={volers}
            name="ВОЛЬЕРЫ ДЛЯ ДОМАШНИХ ЖИВОТНЫХ"
        />
      </div>
    </div>
  );
}

export default Product;