import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Homepage from "./components/Homepage/Homepage";
import Coins from "./components/Coins/Coins";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
