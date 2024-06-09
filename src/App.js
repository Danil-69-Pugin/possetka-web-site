import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import data from './Scripts/data';
import InfoPage from './Pages/InfoPage';
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
    return (
        <div className="App">
            <Router basename="/RosSetka">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {data.map((item, index) => (
                        <Route
                            key={index}
                            path={`/${item.url.replace(/\s+/g, '-').toLowerCase()}`}
                            element={<InfoPage item={item} />}
                        />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
