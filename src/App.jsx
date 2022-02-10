import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./index.css";
import { BrowserRouter as Router, Route, Link, NavLink, Routes} from "react-router-dom";
const App = () => {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/about" element={<About/>} />
                <Route  path="/service" element={<Service/>} />
                <Route  path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />
        </div>
    );

}
export default App;