import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/stack.png";
import Common from "./Common";
var About = () => {
    return(
        <>
            <Common name='Welcome to About Page'
             imgsrc={web}
              visit="/Contact"
              btname="Contact Now" />
        </>
    );
};
export default About;