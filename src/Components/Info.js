import React from "react";
import InformationCard from "./InformationCard";
import { faWarehouse, faTarpDroplet, faHamsa, faCashRegister, faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";


function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Высокое качество ограждений, точные сроки изготовления, цены от производителя!</span>
        </h3>
        <div className="info-description">
          <p>
            15 лет на рынке!
          </p>
          <p>
            Современное и качественное оборудование. Большой выбор продукции в наличии и под заказ. Широкий ассортимент металлических ограждений и заборов, применяемых в различных сферах промышленности, строительстве, сельском хозяйстве и ландшафтном дизайне.
          </p>
          <p>
          </p>
          <h4 className="info-title2"><span>Наши мощности:</span></h4>
        </div>

      </div>

      <div className="info-cards-content">
        <InformationCard
          title="100 000 м2 Склад готовой продукции"
          icon={faWarehouse}
        />

        <InformationCard
          title="3 500 м2 Производственная площадка"
          icon={faTarpDroplet}
        />

        <InformationCard
          title="15 станков для изготовления сетки"
          icon={faCashRegister}
        />
        <InformationCard
            title="5 Покрасочных камер"
            icon={faPaintbrush}
        />
        <InformationCard
            title="3 Поста сварки"
            icon={faHamsa}
        />
      </div>
    </div>
  );
}

export default Info;
