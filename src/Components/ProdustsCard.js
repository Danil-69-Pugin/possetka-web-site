import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";


function ProdustsCard(props) {
    const navigate = useNavigate();
    const clic = () => {
        navigate(`${props.name}`);
    };

  return (
    <div className="dt-card">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
        <button
          className="dt-card-btn-1"
          onClick={clic}
          type="button"> ПОДРОБНЕЕ

        </button>
      <a href={props.name}>
          <button
          className="dt-card-btn-2"
          type="button">
          <FontAwesomeIcon icon={faCommentDots} /> ЗАКАЗАТЬ
        </button></a>
    </div>
  );
}

export default ProdustsCard;
