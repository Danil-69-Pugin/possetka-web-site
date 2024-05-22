import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import '../Styles/Maps.css';

const Maps = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollDiffHeight = 700;
            const mapElement = document.getElementById('map-container');
            if (!mapElement) return;
            const blockTop = mapElement.getBoundingClientRect().top + window.pageYOffset;

            if (window.pageYOffset > blockTop - windowHeight - scrollDiffHeight) {
                setMapLoaded(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check immediately in case the map is already in view

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="maps-section" className="maps-section">
            <div className="maps-wrapper">
                <div className="contact-info">
                    <div className="contact-info-card">
                        <div className="contact-info-title">Как нас найти</div>
                        <div className="contact-info-text">
                            +7 (342) 250 22 02<br />
                            sales_op@zavodrs.ru<br />
                            Г. ПЕРМЬ. УЛ. Г. ХАСАНА, 29
                        </div>
                    </div>
                </div>
                <div className="map-container" id="map-container">
                    {mapLoaded && (
                        <YMaps>
                            <Map defaultState={{ center: [57.983966, 56.260338], zoom: 14 }} width="100%" height="600px">
                                <Placemark geometry={[57.983966, 56.260338]} properties={{ balloonContent: 'Офти' }} />
                            </Map>
                        </YMaps>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Maps;
