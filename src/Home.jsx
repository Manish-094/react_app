import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/stack.png";
import "./Home.css";
import Common from "./Common";
var Home = () => {
    return(
        <>            
        <Common name='Grow your business with'
        imgsrc={web}
         visit="/service"
         btname="Get Started" />
        </>
    );
};
export default Home;