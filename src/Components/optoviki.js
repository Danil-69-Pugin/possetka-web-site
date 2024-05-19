import React, {useState} from "react";
import "../Styles/optoviki.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

function Optoviki() {
    const [isButtonDisabled] = useState(false);
    return (
        <div className="optoviki-section" id="optoviki">
                <div>
                    <br/>
                    <h3 className="Optoviki-title">
                        <span>ВЫ ОПТОВЫЙ ПОКУПАТЕЛЬ ИЛИ МОНТАЖНАЯ БРИГАДА?</span>
                    </h3>
                    <br/>
                    <br/><br/><br/>
                        <div className="Optoviki-text">
                            <p>Получите специальные условия на всю нашу продукцию!</p><br/><br/><br/><br/>
                        </div>
                    <div className="optoviki-btn">
                        <a href="tel:+73422502202">      <button
                            className="navbar-btn"
                            type="button"
                            disabled={isButtonDisabled}

                        >
                            <FontAwesomeIcon icon={faCommentDots} /> Получить предложение
                        </button></a></div>
                    <br/><br/><br/><br/><br/><br/>
                    </div>
        </div>
    )
}

export default Optoviki;
