import React from 'react';
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import '../Styles/InfoPage.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Maps from "../Components/maps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InfoPage = ({ item }) => {
    return (
        <div className="info-page">
            <Navbar />
            <div className="header">
                <img src={item.img} alt={item.name} className="header-img" />
                <h1 className="title">{item.name}</h1>
            </div>
            <div className="content">
                <h2>{item.h1}</h2>
                <p>{item.message}</p>
                <div className="images">
                    <img src={item.img} alt={item.name} alt="Extra 1" />
                    <img src={item.img} alt={item.name} alt="Extra 2" />
                    <img src={item.img} alt={item.name} alt="Extra 3" />
                </div>
                <br/>
                <h2>{item.h2}</h2>
                <ul>
                    <li><span><FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
                        {item.li1}</span></li>
                    <li><span><FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
                        {item.li2}</span></li>
                    <li><span><FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
                        {item.li3}</span></li>
                    <li><span><FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
                        {item.li4}</span></li>
                    <li><span><FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
                        {item.li5}</span></li>
                    <li><span><FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
                        {item.li6}</span></li>
                </ul>
                <h2>{item.h3}</h2>
                <div className="reasons">
                    <div className="reason">
                        <h3>1</h3>
                        <p>{item.text1}</p>
                        <p>{item.text11}</p>
                    </div>
                    <div className="reason">
                        <h3>2</h3>
                        <p>{item.text2}</p>
                        <p>{item.text22}</p>
                    </div>
                    <div className="reason">
                        <h3>3</h3>
                        <p>{item.text3}</p>
                        <p>{item.text33}</p>
                    </div>
                    <div className="reason">
                        <h3>4</h3>
                        <p>{item.text4}</p>
                        <p>{item.text44}</p>
                    </div>
                    <div className="reason">
                        <h3>5</h3>
                        <p>{item.text5}</p>
                        <p>{item.text55}</p>
                    </div>
                    <div className="reason">
                        <h3>6</h3>
                        <p>{item.text6}</p>
                        <p>{item.text66}</p>
                    </div>
                </div>
            </div>
            <Maps />
            <Footer />
        </div>
    );
};

export default InfoPage;
