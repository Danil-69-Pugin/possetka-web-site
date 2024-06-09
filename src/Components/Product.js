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
          url="3dzabors"
          img={dsetka}
          name="3D ЗАБОРЫ"
        />
        <ProdustsCard
          url="ograzgdenie"
          img={timezabor}
          name="ВРЕМЕННЫЕ ОГРАЖДЕНИЯ"
        />
        <ProdustsCard
          url="gabions"
          img={gabions}
          name="ГАБИОНЫ"
        />
        <ProdustsCard
          url="rabitsa"
          img={setkarabitsa}
          name="СЕТКА РАБИЦА"
        />

        <ProdustsCard
            url="open"
              img={vorota}
              name="ВОРОТА И КАЛИТКИ"
          />
          <ProdustsCard
              url="prosetka"
              img={nonpodcop}
              name="ПРОТИВОПОДКОПНЫЕ ОГРАЖДЕНИЯ"
          />
          <ProdustsCard
              url="svarograda"
              img={svarnizabors}
              name="СВАРНЫЕ ОГРАЖДЕНИЯ"
          />
          <ProdustsCard
              url="egoza"
              img={uogoza}
              name='КОЛЮЧАЯ ПРОВОЛОКА ТИПА "ЕГОЗА"'
          />
        <ProdustsCard
            url="volier"
            img={volers}
            name="ВОЛЬЕРЫ ДЛЯ ДОМАШНИХ ЖИВОТНЫХ"
        />
      </div>
    </div>
  );
}

export default Product;