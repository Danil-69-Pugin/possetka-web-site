import React from "react";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">

      <div className="about-text-content">
        <h3 className="about-title">
          <span>ПРЕИМУЩЕСТВО ЗАБОРОВ ИЗ 3D СЕТКИ</span>
        </h3>
        <br/>

        <SolutionStep
          title="НАДЕЖНОСТЬ"
          description="Держит ветровую и снеговую нагрузку"
        />

        <SolutionStep
          title="КАЧЕСТВО"
          description="Выдерживают температурный режим от -60 до + 150°С"
        />

        <SolutionStep
          title="ПРОСТОТА"
          description="Легко и быстро монтируются, не требуют дополнительного ухода"
        />

        <SolutionStep
            title="ДОЛГОВЕЧНОСТЬ"
            description="Срок службы заборов из 3D-сетки до 50 лет"
        />
      </div>
    </div>
  );
}

export default About;
